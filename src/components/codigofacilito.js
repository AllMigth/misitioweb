import React, { useEffect,useState } from "react"
import { useStaticQuery, grap, graphql } from "gatsby";
import Post from './posts';
import Certificate from "./certificate";
import Course from "./course";

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
          data {
            certificates {
              code
              score
              title
            }
            courses {
              title
              progress
              url
            }
          }
        }
    }`);
    console.log(data)
    return (
      <section> 
        <div className="mt-24"> 
          <div className='max-w-4xl mx-auto'>
          <Post 
          data={data.codigofacilitoJson.data.certificates} 
          card = {Certificate}
          title="Mis certificados online en Codigo Facilito"/>

          <Post 
          data={data.codigofacilitoJson.data.courses} 
          card = {Course}
          title="Mi cursos en codigo facilito"/>         
          </div>   
        </div>
      </section>
    );
} 