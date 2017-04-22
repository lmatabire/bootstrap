import * as express from 'express';
let router = express.Router();

let foods = [];

/**
 * GET all foods
 */
 router.get('/', function (req, res, next) {
   res.json(200, foods);
 });

 /**
  * GET specific foods
  */
  router.get('/:id', function (req, res, next) {
    res.json(200, foods[0]);
  });
  /**
   * Post a new food
   */
   router.post('/', function (req, res, next) {
     res.setHeader('Location', 'api/foods' + 1);
   });

   /**
    * Put update a specific food
    */
    router.put('/:id', function (req, res, next) {
      let id = req.params['id'];
      res.json(204)
    });
    /**
     * DELETE a specific food
     */
     router.delete('/:id', function (req, res, next) {
       let id = req.params['id'];
       res.json(204)
     });

     export = router;
