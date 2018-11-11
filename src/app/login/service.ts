import{Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UrlService{
	constructor(private http:HttpClient){

	}

	public register(url,stuobj){
		
		return  this.http.post(url,stuobj);

	}

	public read(url){
		return this.http.get(url);
	}

	public remov(url){
		return this.http.delete(url);
	}


	
}