export type FieldWrapperProps = {
    title:string;
    required?:boolean;
    children:any;
    additionalClass?:any;
}

export type ButtonBaseProps = {
    text:string;
    onClick?:any;
    disabled?:boolean;
    variant?:string;
    children?:any;
    type?:any;
}


export type CartElement = {
    color:string;
    quantity:string;
    size:string;
}

   
  export type defState = {
    products: productInfo | null; 
    cart: any[];
    searchString:any;
  } 

  export type stock = {
    stockLevel: number; 
    stockLevelAvailable: number; 
    stockLevelStatus: string; 
  } 

  export type productInfo = {
    code:string;
    custom:boolean;
    colorSizeOptions:string;  // "GIALLO,ROSSO,VERDE..."
    description:string;
    isHoganByYou:boolean;
    largeSizeDress:string;   
    name:string;    
    price:number;
    salablestores:boolean;
    sizeType:string;
    sizes:string;// "1m,2,2M..."
    stock:stock;    
    tag:string;
    additionalInfo:any;    
    urlImages:any; 
}

  
