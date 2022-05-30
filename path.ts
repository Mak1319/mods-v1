const basename:Function = (pathstring:string,ext?:string):string=>{
	
	const separator= '/';
	const pathArray:Array<string>= pathstring.split(separator);

	const base= pathArray[pathArray.length - 1];
	
	if(ext) return base.replace(ext,'');
	return base ;
}


const dirname:Function = (pathstring:string):string =>{
	
	const separator = '/'
	const pathWithOutLastSeparator= pathstring.replace(/\/$/gi,'');
	
	const pathArray:Array<string> = pathWithOutLastSeparator.split(separator);
	
	pathArray.length -= 1;
	
	return pathArray.join(separator);
	
}

const extname:Function=(pathstring:string):string=>{
	
	const separator = '/'
	const pathArray:Array<string> = pathstring.split(separator);
	
	const base = pathArray[pathArray.length -1];
	const result= base.match(/(\.[a-zA-Z0-9]+)$/gi) 
	return result ? result[0]:'';
	
}

const join:Function =(...paths:string[]):string=>{
	
	let allPathsArray:string[]= []
	paths.forEach((path:string)=>{
		allPathsArray=allPathsArray.concat(path.split('/'))
	})
	
	console.log(allPathsArray);
	
	return "";
}

join('/msjsk','jsks','../hsjsjj')
// join()