import styled from "styled-components"
export default function BookList({books}){
const SECTION=styled.section`
margin: 0 auto; 
 padding: 10px; 
width: 100%; 
height: 100%; 
background-color: #f8f9fa; 
 font-family: Arial, sans-serif;
 
`

const TABLE=styled.table`
border: 1px solid black;
 border-collapse: collapse;
 background-color:burlywood ;
 text-align: justify;

`
const THEAD=styled.thead`
background-color:rgb(203, 120, 10) ;
border: 1px solid black;
color:rgb(128, 73, 183);
`
const TH=styled.th`
padding:10px;
`
const TR=styled.tr`
color:black;
`

return<SECTION>
{<TABLE> 
    <THEAD  >
         <tr> 
         <TH>S.No</TH>
         <TH>Title</TH> 
         <TH>Author</TH> 
         <TH>First Published</TH> 
         <TH>Language</TH>
         </tr>
    </THEAD> 
    <tbody> 
        {books.map((book,index) => ( <TR key={book.key}> 
            
            <td>{index+1}</td>
            <td>{book.title}</td> 
            <td>{book.author_name && book.author_name.join(', ')}</td> 
            <td>{book.first_publish_year}</td> 
            <td>{book.language && book.language.join(', ')}</td></TR> ))} 
    </tbody> 
</TABLE>
}
</SECTION>
}