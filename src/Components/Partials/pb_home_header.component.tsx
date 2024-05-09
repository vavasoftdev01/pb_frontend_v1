import React from "react";


function PBHomeHeader() {

    let handleOnClick = () => {
        
    }

    return(
        <>
            <div className="flex flex-row text-center font-normal text-white flex-nowrap mb-5 h-10">
                <button className="bg-red-600 w-1/4 overflow-visible hover:cursor-pointer hover:underline  hover:bg-red-700 skew-x-[37deg]">
                    <div className="flex flex-row justify-center pt-2">
                        <span className="skew-x-[-37deg]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path fillRule="evenodd" clipRule="evenodd" d="M2.14098 13.7036C1.00994 6.85604 6.85069 1.0114 13.7007 2.14044C17.8448 2.82349 21.1852 6.16844 21.862 10.3136C22.9789 17.1543 17.1506 22.9796 10.3121 21.8617C6.16875 21.1845 2.82512 17.8459 2.14098 13.7036ZM9.99999 18.0049C9.99999 19.1079 10.8971 20.0051 12 20.0051C13.1029 20.0051 14 19.1079 14 18.0049C14 16.9028 13.1029 16.0051 12 16.0051C10.8971 16.0051 9.99999 16.9028 9.99999 18.0049ZM15.9339 10.8779C16.2767 10.5322 16.5437 10.1348 16.7356 9.68456C16.9266 9.23437 17.0228 8.71875 17.0228 8.13672C17.0228 7.26758 16.8064 6.52344 16.3738 5.90723C15.9412 5.29102 15.3445 4.82031 14.5838 4.49414C13.8235 4.16895 12.948 4.00586 11.9588 4.00586C11.0589 4.00586 10.2362 4.16602 9.49059 4.48633C8.74498 4.80762 8.14586 5.292 7.69322 5.94141C7.32939 6.46312 7.10375 7.09672 7.01653 7.84226C6.98107 8.14499 7.2365 8.40521 7.54131 8.40521L9.17064 8.40526C10.0729 8.40361 10.0428 8.07202 10.0428 8.07202L10.0656 7.92749C10.1136 7.6901 10.1979 7.56105 10.3182 7.37989C10.5023 7.1045 10.7386 6.89551 11.0267 6.75391C11.3153 6.61231 11.621 6.54102 11.9442 6.54102C12.2772 6.54102 12.5819 6.61133 12.8578 6.75C13.1337 6.88965 13.3534 7.08789 13.5174 7.34668C13.6815 7.60547 13.7635 7.90625 13.7635 8.24902C13.7635 8.57227 13.6917 8.86426 13.5472 9.125C13.4031 9.38672 13.2093 9.62402 12.9657 9.83789C12.8353 9.95187 12.6811 10.0608 12.5268 10.1697C12.4924 10.194 12.458 10.2183 12.4239 10.2427C11.714 10.7358 11.1338 11.686 10.9823 11.9354C10.8838 12.1298 10.7982 12.3395 10.7265 12.5742C10.5333 13.2072 10.4941 14.0995 10.4889 14.6099C10.4867 14.8316 10.6673 15.01 10.8891 15.01L12.9216 15.01C13.1412 15.01 13.3179 14.8293 13.3212 14.6096C13.3445 13.0259 13.5175 12.7608 13.8735 12.4282C14.1244 12.1743 14.3255 12.0478 14.7181 11.8135C15.1854 11.5351 15.5906 11.2236 15.9339 10.8779Z" fill="#fff"></path></svg></span>
                        <a className="skew-x-[-37deg]">
                            도움말
                        </a>
                    </div>
                </button>

                <button className="w-full hover:cursor-pointer hover:underline">
                    <img src="./images/gameplay_top.png" className="object-stretch w-full h-full relative"></img>
                    <a className="absolute mx-auto my-auto top-2">
                        파워볼(1분)
                    </a>
                </button>

                <button className="bg-blue-600 w-1/4 overflow-visible hover:cursor-pointer hover:underline hover:bg-blue-700 skew-x-[-37deg]">
                    <div className=" flex flex-row justify-center pt-2">
                        <span className="skew-x-[37deg]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="M22.2318 14.6435L20.3477 13.5524C20.5379 12.5234 20.5379 11.4677 20.3477 10.4387L22.2318 9.34759C22.4485 9.2234 22.5458 8.96614 22.475 8.72663C21.9841 7.1476 21.1482 5.71938 20.0558 4.53067C19.8877 4.34882 19.6135 4.30446 19.4012 4.42866L17.5172 5.51978C16.7255 4.83672 15.8144 4.3089 14.8281 3.96293V1.78512C14.8281 1.53673 14.6557 1.3194 14.4124 1.26617C12.7893 0.902461 11.1263 0.920203 9.58279 1.26617C9.33954 1.3194 9.16706 1.53673 9.16706 1.78512V3.96737C8.18521 4.31777 7.27413 4.84559 6.47804 5.52422L4.59839 4.43309C4.38167 4.3089 4.11189 4.34882 3.94382 4.53511C2.85141 5.71938 2.01552 7.1476 1.5246 8.73106C1.44941 8.97058 1.55113 9.22783 1.76785 9.35203L3.65192 10.4432C3.46175 11.4722 3.46175 12.5278 3.65192 13.5568L1.76785 14.648C1.55113 14.7722 1.45383 15.0294 1.5246 15.2689C2.01552 16.848 2.85141 18.2762 3.94382 19.4649C4.11189 19.6467 4.3861 19.6911 4.59839 19.5669L6.48246 18.4758C7.27413 19.1588 8.18521 19.6867 9.17148 20.0326V22.2149C9.17148 22.4633 9.34397 22.6806 9.58721 22.7338C11.2104 23.0975 12.8733 23.0798 14.4168 22.7338C14.6601 22.6806 14.8326 22.4633 14.8326 22.2149V20.0326C15.8144 19.6822 16.7255 19.1544 17.5216 18.4758L19.4057 19.5669C19.6224 19.6911 19.8922 19.6512 20.0602 19.4649C21.1526 18.2806 21.9885 16.8524 22.4794 15.2689C22.5458 15.025 22.4485 14.7677 22.2318 14.6435ZM11.9976 15.5439C10.0472 15.5439 8.45942 13.9516 8.45942 11.9956C8.45942 10.0395 10.0472 8.44719 11.9976 8.44719C13.948 8.44719 15.5358 10.0395 15.5358 11.9956C15.5358 13.9516 13.948 15.5439 11.9976 15.5439Z" fill="#fff"></path></svg>
                        </span>
                        <a className="skew-x-[37deg]">
                            설정
                        </a>
                    </div>
                </button>
            </div>
        </>
    )
}

export default PBHomeHeader