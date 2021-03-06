import { Directive } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable, Observer } from 'rxjs';



export const mimeType = (control : AbstractControl): Promise <{[key : string]: any}>| Observable <{[key : string]: any}>=>{
    const file = control.value as File;// getting our file and telling typescript that it is a file
    const fileReader = new FileReader()//can be used to read in the value of the file
    //creating our own observable
    const frObs = Observable.create(
        (observer : Observer<{[key : string]: any}>)=>{
        fileReader.addEventListener("loadend",()=>{
            const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0,4) //this creates an array of 8 bits unsigned integers
            let header = "";
            let isValid = false;
            for(let i=0;i<arr.length;i++){
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                  isValid = true;
                  break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                  isValid = true;
                  break;
                default:
                  isValid = false; // Or you can use the blob.type as callback
                  break;
              }
              if(isValid){
                  observer.next(null);
              }else{
                  observer.next({invalidMimeType : true})
              }
              observer.complete()
        })
        fileReader.readAsArrayBuffer(file);
    })
    return frObs;
}