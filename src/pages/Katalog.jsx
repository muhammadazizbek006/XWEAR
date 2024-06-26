
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import catalog from "../data/data";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
const Katalog = () => {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
        <section>
            <div className="containerb">
              {/* left */}
              <div>
                {/* kategoria */}
     <div>
      <Accordion className="w-[318px]  border-2 rounded-md pt-4 px-4 border-gray-500" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="mb-5" onClick={() => handleOpen(1)}>Категории</AccordionHeader>
     
        {
          catalog.categoria.map((e)=>{
            return(
          <AccordionBody className='' key={e.id}>
            <button className="text-base font-semibold mb-5">{e.kategoria}</button>
          </AccordionBody>
            )
          })
        }
      </Accordion>
    </div>
          {/* razmer */}
      <div>
      <Accordion className="w-[318px]  border-2 rounded-md pt-4 px-4 border-gray-500" open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="mb-5" onClick={() => handleOpen(2)}>Размеры (EU)</AccordionHeader>
     
        {
          catalog.categoria.map((e)=>{
            return(
          <AccordionBody className='' key={e.id}>
            <button className="text-base font-semibold mb-5">{e.kategoria}</button>
          </AccordionBody>
            )
          })
        }
      </Accordion>
    </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Katalog