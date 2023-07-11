"use client";
import { MdOutlineVerified, MdSearch } from "react-icons/md";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface exemptedType {
  name: string;
  number: string;
  exempted: string;
}

export default function ExeptionsList({
  params,
}: {
  params: { stage: string; year: string };
}) {
  const [data, setData] = useState<exemptedType[]>([]);
  const [filteredData, setFilteredData] = useState<exemptedType[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  const navigate = useRouter();

  useEffect(() => {
    const validYear = ["ssa1", "ssa2", "ssa3"].includes(params.stage);
    const validStage = ["2023"].includes(params.year);
    if (validYear && validStage) {
      import(`./data/${params.year}/${params.stage.toUpperCase()}`).then(
        ({ exempteds }) => {
          setData(exempteds);
          setDataLoading(false);
        }
      );
    } else {
      navigate.push("/");
    }
  }, [params.stage, navigate]);

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
      <div className="content">
        <h1 className="title text-2xl font-bold">
          {`Isentos ${params.stage?.toUpperCase()} ${params.year}`}
          <a className="font-normal text-base" href="https://processodeingresso.upe.pe.gov.br/">Ver no site oficial</a>
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
