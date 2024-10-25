import Link from "next/link";


const CompanyList = ({ companies, onSelectCompany }) => {
    return (
      <div className="overflow-auto h-[500px] pr-4">
        <ul className="flex flex-col gap-3">
          {companies.map((company) => (
            <li className="flex border border-gray-200 p-4 rounded-3xl cursor-pointer hover:bg-gray-50" key={company.id} onClick={() => onSelectCompany(company)}>
              <div className="compani_picture">

              </div>
              <div className="compani_info w-full">
                    <h3 className="text-xl text-defCol4">{company.name}</h3>
                    <p className="text-md font-extralight mb-2">
                        {company.description}
                    </p>
                <div className="">
                    <p className="text-sm font-extralight text-gray-500">Ünvan:</p>
                    <p className="text-md text-gray-800 pl-2">{company.address}</p>
                </div>
                <div className="">
                    <p className="text-sm font-extralight text-gray-500">Əlaqə:</p>
                    <p className="text-md text-gray-800 pl-2">{company.phone}</p>
                </div>
                <Link href="./goods" className="flex items-center gap-4 absolute right-1 bottom-1 bg-defCol3 text-white p-3 rounded-xl">
                    <span>
                        Məshullara  bax
                    </span>
                </Link>
              </div>
              
              
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CompanyList;
  