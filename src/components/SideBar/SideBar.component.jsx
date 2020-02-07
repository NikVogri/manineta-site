import React from "react"
import styles from "./SideBar.module.scss"
import { Accordion, Button } from "react-bootstrap"
import { FaSortDown } from "react-icons/fa"
const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <Accordion defaultActiveKey="1">
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey="0"
          className={styles.tabTitle}
        >
          Otroški dodatki <FaSortDown />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <ul className={styles.tabItems}>
            <li>Igre</li>
            <li>Otroške ure</li>
            <li>Napis imen</li>
          </ul>
        </Accordion.Collapse>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Krst, birma, poroka <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Vabila</li>
              <li>Držala za prstane</li>
              <li>Naprstni šopki</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Darila <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Škatle</li>
              <li>Table za kozarce</li>
              <li>Ure s posvetilom</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Nakit <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Uhani</li>
              <li>Verižice</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Dom <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Dekoracije</li>
              <li>Dodatki</li>
              <li>Podstavki za posode</li>
              <li>Ure</li>
              <li>Hišice</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Božično - novoletni <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Smrekice</li>
              <li>Okraski</li>
              <li>Svečniki</li>
              <li>Voščila</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
        <Accordion defaultActiveKey="1">
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            className={styles.tabTitle}
          >
            Ostalo <FaSortDown />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ul className={styles.tabItems}>
              <li>Dekorativni izdelki</li>
              <li>Svečke</li>
            </ul>
          </Accordion.Collapse>
        </Accordion>
      </Accordion>
    </aside>
  )
}

export default SideBar
