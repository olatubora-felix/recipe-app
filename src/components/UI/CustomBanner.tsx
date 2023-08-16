import { FC } from 'react'

const CustomBanner: FC<CustomerProps> = ({ className, title, subTitle }) => {

  return (
    <div className={`${className} w-full grid place-content-center text-white text-center `}>
      <h2 className='font-bold md:text-5xl text-2xl leading-normal md:my-4 my-2'>{title}</h2>
      <p className='md:text-2xl text-sm font-normal leading-normal'>{subTitle}</p>
    </div>
  )
}

export default CustomBanner

interface CustomerProps {
  className: string,
  title: string,
  subTitle: string
}