import studentImg from './assets/student.png';
import teacherImg from './assets/classroom.png';
const UploadComponent = () => {

  return (
    <div className="buttons">
      <h1 className="text-4xl">Siz kimsiz <code>?</code></h1>
      <div className='flex gap-4 mt-10'>
        <a href='https://student.tatu-module.uz/'>
          <img src={studentImg} className='h-[200px]' />
          <button className="offset">O'quvchi</button>
        </a>
        <a href='https://teacher.tatu-module.uz/'>
          <img src={teacherImg} className='h-[200px]' />
          <button className="slide">O'qituvchi</button>
        </a>
      </div>
    </div>
  );
};

export default UploadComponent;
