module.exports.getDoom = (req, res) => {

  const data =  { id: 123, name: 'Hello'};


  if (req.accepts('application/json')) {
     res.set('Content-Type', 'application/json'); // Set the content type header
     res.status(200).send(data);

  } else if (req.accepts('application/xml')) {
     res.set('Content-Type', 'application/xml'); // Set the content type header
     res.status(200).send( { id: 123, name: 'Hello'} );

  } else {
    res.status(406).send('Not Acceptable');
  }

}
;
