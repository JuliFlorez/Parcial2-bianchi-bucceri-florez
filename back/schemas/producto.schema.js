import yup from 'yup'

const libroSchemaCreate = yup.object({
    name: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    author: yup.string(),
    genre: yup.string(),
    image_url: yup.string(),
  });

  const libroSchemaPatch = yup.object({
    name: yup.string(),
    price: yup.number(),
    description: yup.string(),
    author: yup.string(),
    genre: yup.string(),
    image_url: yup.string(),
  });
  

  export {
    libroSchemaCreate,
    libroSchemaPatch
  }