import React from 'react';
import '../Style/Program.css';
import '../pages/Login';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';






// const SingleImageSection = () => (
//   <div>
//     <img className="Image" src="https://cdn.discordapp.com/attachments/1205756212445192263/1205756751660453908/1.png?ex=65e2c1fb&is=65d04cfb&hm=fc8d5cfadee94fe6baaca53754fcff3bae73ac996c3758b515e6f92588c0514b&" alt="Single Image" />
//   </div>
// );




// const ProgramSection = ({ title, imageUrl, content, isImageOnRight }) => {
//   const containerStyle = {
//     className: 'programSection',
//     style: {
//       flexDirection: isImageOnRight ? 'row-reverse' : 'row',
//     },
//   };

//   return (
//     <div style={containerStyle.style} className={containerStyle.className}>
//       <img src={imageUrl} alt={title} className='image' />
//       <div className='overlay'>
//         <div className='text'>Overlay Text</div>
//       </div>
//       <div className='content'>
//         <h2 className='programTitle'>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// };
const Workshops = () => {
  return (
    <div>
      <article className="card_program">
        <div className="temporary_text">
          {/* Place image here */}
        </div>
        <div className="card_content">
          <span className="card_title">This is a Title</span>
          <span className="card_subtitle">This is a subtitle of this page. Let us see how it looks on the Web.</span>
          <p className="card_description">Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
        </div>
      </article>

      <article className="card_program">
        <div className="temporary_text">
          {/* Place image here */}
        </div>
        <div className="card_content">
          <span className="card_title">This is a Title</span>
          <span className="card_subtitle">This is a subtitle of this page. Let us see how it looks on the Web.</span>
          <p className="card_description">Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
        </div>
      </article>
    </div>
  );
};







const Missions = () => (
  <div className="app">
    <div>
      <NavBar />
      
      <Workshops />
     
      <Footer />
    </div>
  </div>
);

export default Missions;