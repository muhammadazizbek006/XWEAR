import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Faqs } from '../data/data';
 
// img
import plus from '../img/faqs/plus.svg';
import minus from '../img/faqs/minus.svg';

const Faq = () => {
  const [open, setOpen] = React.useState(null);
  
  const handleOpen = (value) => {
    setOpen(open === value ? null : value);
  };

  return (
    <>
      <section className='pt-8 pb-28'>
        <div className="containerb">
          <h2 className='text-3xl font-black mb-7'>FAQ</h2>

          {Faqs.map((faq, e) => (
            <Accordion key={faq.id} open={open === e}>
              <div className='border-b-2'>
                <AccordionHeader className='flex justify-between p items-center py-5  ' onClick={() => handleOpen(e)}>
                  <p className=' sm:text-base sm:font-semibold'>{faq.savol}</p>
                  <img className='right-0' src={open === e ? minus : plus} alt={faq.savol} />
                </AccordionHeader>
                {open === e && (
                  <AccordionBody className='flex justify-between pb-5'>
                    <p className='text-base '>{faq.javob}</p>
                  </AccordionBody>
                )}
              </div>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
