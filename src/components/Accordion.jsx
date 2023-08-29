import { useState } from 'react';
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const App = () => {

  const [selected, setSelected ] = useState(null);

  const toggle = (i) => {
    if (selected === i){
      return setSelected(null)
    }
    setSelected(i);
  }

  const accordionData = [
    {
      question: "How do I pay for the Essentials or Premium plan?",
      answer:
      "Fundamentals investing is a quantitative field, which fits ML and AI. Further, value investing stresses natural language understanding paired with quantitative financial metrics. NLU capability with quantitative supervision is a breakthrough application via massive scale language models. We're at the outset of a new quantitative fundamental revolution!",
    },
    {
      question: "Can I cancel my Essentials or Premium plan subscription at any time?",
      answer:
        "Fundamentals investing is a quantitative field, which fits ML and AI. Further, value investing stresses natural language understanding paired with quantitative financial metrics. NLU capability with quantitative supervision is a breakthrough application via massive scale language models. We're at the outset of a new quantitative fundamental revolution!",
    },
    {
      question: "We need to add new users to our team. How will that be billed?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat aspernatur assumenda quisquam sed quo quis possimus alias repellendus distinctio!You Should learn web development in 2023.You Should learn web development in 2023.",
    },
    {
      question: "How Long Will It Take For My Order To Arrive After I Make Payment?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat aspernatur assumenda quisquam sed quo quis possimus alias repellendus distinctio!You Should learn web development in 2023.You Should learn web development in 2023.",
    },
  ];

  return (
    <div className='text-inter flex flex-col items-center w-[100vw] md:mb-48 mb-10 sm:mt-0 ss:mt-[930px] mt-[770px]'>
        <h1 className='sm:text-[35px] text-xl font-bold'>Frequently asked questions</h1>
        <p className='text-[15px] text-center sm:w-full w-9/12 font-medium sm:mt-6 mt-2 sm:mb-14 mb-5 text-[#3E4461]'>Your email address will not be published. Required fields are marked*</p>
      <div className="md:w-[1000px] w-full md:px-0 sm:px-20 px-6">
        {
          accordionData.map((item, i) => (
            <div key={i} className="bg-white mb-4 px-5 pt-7 rounded-xl border-l-2 border-[#005AED]">
              <div onClick={()=> toggle(i)} className="flex justify-between items-center">
                <h2 className={`sm:text-xl text-lg  w-10/12 pb-4 font-semibold ${selected == i ? 'text-[#005AED]' :'text-[#1E233D]'}`}>{item.question}</h2>
                <span className='sm:text-lg text-sm pb-4'>{selected == i ? <AiOutlineMinus size={25} 
                className='text-[#005AED]'/>: <AiOutlinePlus size={25}/>}</span>
              </div>
              <div className={selected == i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;