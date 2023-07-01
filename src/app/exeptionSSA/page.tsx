'use client'
import Header from "../../components/Header/Header";
import { MdOutlineVerified, MdSearch } from "react-icons/md";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface exemptedType {
  name: string;
  number: string;
  exempted: string;
}

export default function ExeptionSSA({stage}:{stage:string}) {
  const [data, setData] = useState<exemptedType[]>([]);
  const [filteredData, setFilteredData] = useState<exemptedType[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  const inputData = useRef();

  const navigate = useRouter();

  useEffect(() => {
    if (stage === "ssa1") {
      import("./data/exemptedSSA1").then(({ exempteds }) => {
        setData(exempteds);
        setDataLoading(false);
      });
    } else if (stage === "ssa2") {
      import("./data/exemptedSSA2").then(({ exempteds }) => {
        setData(exempteds);
        setDataLoading(false);
      });
    } else if (stage === "ssa3") {
      import("./data/exemptedSSA3").then(({ exempteds }) => {
        setData(exempteds);
        setDataLoading(false);
      });
    } else {
      navigate.push("/");
    }
  }, []);

  const handleSearch = (search: string) => {
    const startedWith = data.sort().filter((d) =>
      d.name.startsWith(
        search
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toUpperCase()
      )
    );
    const matches = data.filter(
      (d) =>
        d.name.includes(search.toUpperCase()) && !d.name.startsWith(search.toUpperCase())
    );
    setFilteredData([...startedWith, ...matches]);
  };

  return (
    <div className="ExeptionSSA">
      <Header hasLink={true} />
      <div className="content">
        <h1 className="title">
          {`Isentos ${stage?.toUpperCase()} 2023`}
          <a href="https://processodeingresso.upe.pe.gov.br/">Ver no site oficial</a>
        </h1>
        <div className="searchField">
          <input
            type="text"
            className="input"
            onInput={(e) => {
              handleSearch((e.target as HTMLInputElement).value);
            }}
          />
          <MdSearch />
        </div>
        <p className="optimization">Somente os 25 primeiros resultados são exibidos!</p>
        <div className="exeptionsList">
          {dataLoading ? <p className="loadingText">Carregando dados...</p> : <></>}
          {(filteredData.length > 0 ? filteredData : data)
            .slice(0, 50)
            .map(({ name, number, exempted }, key) => {
              return (
                <div key={key + number} className="item">
                  <p className="name">{name}</p>
                  <div className="result">
                    <p className="exempted">{`${exempted}`}</p>
                    {exempted == "Não" ? (
                      <BsFillEmojiDizzyFill className="no" />
                    ) : (
                      <MdOutlineVerified className="yes" />
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
