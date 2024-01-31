import cors from 'cors';
import express from 'express';
import sequelize from './sequelize.js';
import nocache from 'nocache';
const port = 3000;


const initialize = (app) => { 

app.use(cors());
app.use(express.json());
app.use(nocache());

    
app.use('/healthz', async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).send();
      }
    
    if (Object.keys(req.body).length !== 0 || Object.keys(req.query).length !== 0) {
        return res.status(400).send();
      }
    try {
        await sequelize.authenticate();
        res.status(200).send();
    } catch (error) {
        res.status(503).send();
        console.log(error);
    }
});

};
export default initialize;

