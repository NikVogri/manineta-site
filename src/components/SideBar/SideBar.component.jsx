import React from "react"
import styles from "./SideBar.module.scss"
import { Accordion, Button } from "react-bootstrap"
import { FaSortDown } from "react-icons/fa"
import { Link } from "gatsby"
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
            <Link to="/izdelki/igre">
              <li>Igre</li>
            </Link>
            <Link to="/izdelki/otroske-ure">
              <li>Otroške ure</li>
            </Link>
            <Link to="/izdelki/napis-imen">
              <li>Napis imen</li>
            </Link>
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
              <Link to="/izdelki/vabila">
                <li>Vabila</li>
              </Link>
              <Link to="/izdelki/drzala-za-prstane">
                <li>Držala za prstane</li>
              </Link>

              <Link to="/izdelki/naprstni-sopki">
                <li>Naprstni šopki</li>
              </Link>
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
              <Link to="/izdelki/skatle">
                <li>Škatle</li>
              </Link>
              <Link to="/izdelki/tabla-za-kozarce-s-posvetilom">
                <li>Table za kozarce</li>
              </Link>
              <Link to="/izdelki/ure">
                <li>Ure</li>
              </Link>
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
              <Link to="/izdelki/uhani">
                <li>Uhani</li>
              </Link>
              <Link to="/izdelki/verizice">
                <li>Verižice</li>
              </Link>
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
              <Link to="/izdelki/dekoracija">
                <li>Dekoracije</li>
              </Link>
              <Link to="/izdelki/dodatki">
                <li>Dodatki</li>
              </Link>
              <Link to="/izdelki/podstavek-za-posodo-kozarce">
                <li>Podstavki za posode & kozarce</li>
              </Link>
              <Link to="/izdelki/hisice">
                <li>Hišice</li>
              </Link>
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
              <Link to="/izdelki/smrekice">
                <li>Smrekice</li>
              </Link>
              <Link to="/izdelki/okraski">
                <li>Okraski</li>
              </Link>
              <Link to="/izdelki/svecniki">
                <li>Svečniki</li>
              </Link>
              <Link to="/izdelki/voscila">
                <li>Voščila</li>
              </Link>
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
              <Link to="/izdelki/dekorativni-izdelki">
                <li>Dekorativni izdelki</li>
              </Link>
              <Link to="/izdelki/svecke">
                <li>Svečke</li>
              </Link>
            </ul>
          </Accordion.Collapse>
        </Accordion>
      </Accordion>
    </aside>
  )
}

export default SideBar
