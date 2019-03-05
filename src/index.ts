import * as AJV from 'ajv';


export default function zoll( schema?: any ) {

  if ( schema ) {

    const validate = AJV().compile( schema );

    return ( data: any ) => {

      const valid = validate( data );

      if ( !valid ) {
        throw validate.errors;
      }

    }
  }

  return () => { };
}
