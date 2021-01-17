import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
dbJSONFIle: any=[]
  constructor(private _http:HttpClient) { }

  getAllCode(){
    return this._http.get("http://localhost:3000/2090008119-42-ChronicConditions")
  }
  updateCode(selectedFileData:any){
    return this._http.put("http://localhost:3000/pdfWithChronicDieases/" + selectedFileData.id , {chronicDieases : selectedFileData.chronicDieases})

  }

  getSelectedFileChronicDieases(fileName: string) {
    return this._http.get("http://localhost:3000/pdfWithChronicDieases/" + fileName)
  }
  getEdit(){

  }

}
