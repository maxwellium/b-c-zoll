import * as AJV from 'ajv';

type assertT<T> = ( data: any ) => T;

const noop = ( data: any ) => data;


export function zoll<T>( schema?: any ) {

  if ( schema ) {

    const validate = AJV().compile( schema );

    return ( data: any ): T => {

      const valid = validate( data );

      if ( !valid ) {
        throw {
          validation: validate.errors,
          statusCode: 400
        };
      }

      return data;
    }
  }

  return noop as assertT<T>;
}
