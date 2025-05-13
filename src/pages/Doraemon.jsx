import { memo } from 'react'

const Doraemon = () => {
  return (
    <div className="absolute left-[100px] top-[100px] border-2 border-black w-lg h-[700px] flex justify-center">
      {/* header
       * rounded-ee-full
       * rounded-es-full
       * rounded-tl-full
       * rounded-tr-full
       */}
      <div
        className="header-container
        absolute
        mt-3
        w-[350px] 
        h-[320px]
       bg-primary 
        border-6 
       border-black
        rounded-full
        rotate-[-25deg]
        overflow-hidden
       "
      >
        <div
          className="absolute 
          top-[96px]
          left-[50px]
          header-face-container
        border-6 
       border-black
        h-[280px]
        w-[280px]
        bg-white
        rounded-tl-[220px]
        rounded-tr-[160px]
        rounded-es-[220px]
        rounded-ee-[120px]
          "
        >
          <div
            className="left-eye  z-2
            absolute
            left-[84px]
            top-[-28px]
            border-6 
          border-black 
            w-[60px] 
            h-[70px]
            rounded-[70px]
            bg-white
            rotate-4
       "
          >
            <div className="absolute bottom-[10px] right-[2px] w-[16px] h-[16px] bg-black rounded-full"></div>
          </div>
          <div 
            className="right-eye z-2
          left-eye  
            absolute
            left-[140px]
            top-[-40px]
            border-6 
          border-black 
            w-[62px] 
            h-[78px]
            rounded-[70px]
            bg-white
            rotate-x-20
            overflow-hidden
          "
          >
            <div className="absolute bottom-[4px] right-[0px] w-[16px] h-[16px] bg-black rounded-full"></div>
          </div>
          <div
            className="nose absolute w-[40px] h-[40px] border-6 z-2
          border-black 
          bg-[#c5432b]
          rounded-full
          top-[20px]
          left-[130px]
          "
          >
            <div
              className="absolute w-[10px] h-[10px] bg-[#ffceb7] rounded-full top-[10px] left-[10px]
            bg-radial from-[#ffceb7] from-40% to-[#c5432b]
            "
            ></div>
          </div>
          {/* face line */}
          <div className="absolute border-6  border-transparent z-1
       border-r-black  w-[400px] h-[400px] rounded-full rotate-[16deg] top-[-50px] left-[-214px]"></div>
          {/* mouth */}
          <div className="absolute border-6 border-transparent border-r-black z-1 w-[210px] h-[238px] rounded-full top-[-40px] left-[36px] rotate-[64deg]"></div>
          <div className="absolute w-[70px] h-[30px] bg-white z-2 left-[150px] top-[176px] rotate-[-22deg]"></div>
        </div>
      </div>
    </div>
  )
}

export default Doraemon
