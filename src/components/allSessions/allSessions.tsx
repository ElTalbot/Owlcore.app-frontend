import React, { useEffect, useState } from "react";
import "./mySessionsPage.scss";
import axios from "axios";
import { ISession } from "../../interfaces/session";

type Sessions = null | Array<ISession>;

export default function AllSessions() {
  const [sessionList, setSessionList] = useState<Sessions>(null);

  const getSessionList = async () => {
    try {
      const { data } = await axios.get(`url goes here`);
      setSessionList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSessionList();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // add loading placeholder

  return; // <section className="session-list">
  //   {sessionList &&
  //     sessionList.map((session: any) => {
  //       return console.log(session);
  //     })}
  // </section>
}
