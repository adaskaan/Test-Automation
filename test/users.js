import { describe } from "mocha";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public/v2/');

import { expect } from "chai";

const TOKEN ='ad9727c2064575a2a2498c73021f3aa2b5076348a1ce6b5fcb3edb068c5aa544'
describe ('Users',()=>{
    it('GET /users',()=>{
        /*
        request
        .get('v2/users?access-token=${TOKEN}').end((err,res)=>{
            //console.log(res.body);
            expect(res.body).to.not.be.empty;
            done();
        });
         */
       return request
        .get('users?access-token='+TOKEN).then((res)=>{
           // console.log(res.body);
            expect(res.body).to.not.be.empty;
        });
    });
 
    it('GET /users/:id',()=>{
        return request
        .get('users/3431?access-token='+TOKEN).then((res)=>{
            //console.log(res.body.id);
            expect(res.body.id).to.be.eq(3431);
        });
    });
    it('GET /users with query params',()=>{
        const url = 'users?access-token='+TOKEN+'&gender=female&status=active'
        return request
        .get(url).then((res)=>{
            //console.log(url);
            expect(res.body).to.be.not.empty;
            res.body.forEach(element => {
                expect(element.gender).to.be.eq('female');
                expect(element.status).to.be.eq('active');
               
            });
        });
    });
    it.only('POST /users',()=>{
        const data = {
            'email':'test'+Math.floor(Math.random()*100)+'@testi.coma',
            'name':'testi test',
            'gender':'male',
            'status':'inactive'
        };
        return request
        .post('users').set('Authorization',`Bearer ${TOKEN}`)
        .send(data)
        .then((res)=>{
            console.log(res.statusCode);
            expect(res.body).to.deep.include(data);
        })
    });
    
});