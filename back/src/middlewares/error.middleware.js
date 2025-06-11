// On est obligé de laissé le 4eme paramètre pour que express sache que c'est un middleware d'erreur
// eslint-disable-next-line no-unused-vars
export const errorMiddleware = (err, _, res, __) => {

    console.error(err);
  
    if(err.name === 'NotFoundError'){
      return res.status(404).json({error: err.message});
    }
  
    if(err.name === 'UserInputError'){
      return res.status(400).json({error: err.message});
    }
  
    return res.status(500).json({error: 'Internal Server Error, plz retry again later'});
  };