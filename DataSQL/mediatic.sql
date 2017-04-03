--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

-- Started on 2017-03-31 14:58:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2155 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 24695)
-- Name: adherent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE adherent (
    id bigint NOT NULL,
    adresse character varying(255) NOT NULL,
    codepostal integer NOT NULL,
    datenaissance date NOT NULL,
    email character varying(255) NOT NULL,
    nom character varying(255) NOT NULL,
    prenom character varying(255) NOT NULL,
    ville character varying(255) NOT NULL,
    cotisation_id bigint
);


ALTER TABLE adherent OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 24703)
-- Name: cotisation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cotisation (
    id bigint NOT NULL,
    datecotisation date NOT NULL,
    montantcotisation bigint NOT NULL
);


ALTER TABLE cotisation OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 24708)
-- Name: emprunt; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE emprunt (
    id bigint NOT NULL,
    dateemprunt date,
    dateretour date,
    retourner boolean,
    adherent_id bigint,
    media_id bigint
);


ALTER TABLE emprunt OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 24736)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hibernate_sequence OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 24713)
-- Name: media; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE media (
    id bigint NOT NULL,
    auteur character varying(255),
    titre character varying(255) NOT NULL,
    type character varying(255)
);


ALTER TABLE media OWNER TO postgres;

--
-- TOC entry 2143 (class 0 OID 24695)
-- Dependencies: 185
-- Data for Name: adherent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adherent (id, adresse, codepostal, datenaissance, email, nom, prenom, ville, cotisation_id) FROM stdin;
\.


--
-- TOC entry 2144 (class 0 OID 24703)
-- Dependencies: 186
-- Data for Name: cotisation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY cotisation (id, datecotisation, montantcotisation) FROM stdin;
\.


--
-- TOC entry 2145 (class 0 OID 24708)
-- Dependencies: 187
-- Data for Name: emprunt; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY emprunt (id, dateemprunt, dateretour, retourner, adherent_id, media_id) FROM stdin;
\.


--
-- TOC entry 2156 (class 0 OID 0)
-- Dependencies: 189
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hibernate_sequence', 1, false);


--
-- TOC entry 2146 (class 0 OID 24713)
-- Dependencies: 188
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY media (id, auteur, titre, type) FROM stdin;
\.


--
-- TOC entry 2016 (class 2606 OID 24702)
-- Name: adherent adherent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adherent
    ADD CONSTRAINT adherent_pkey PRIMARY KEY (id);


--
-- TOC entry 2018 (class 2606 OID 24707)
-- Name: cotisation cotisation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cotisation
    ADD CONSTRAINT cotisation_pkey PRIMARY KEY (id);


--
-- TOC entry 2020 (class 2606 OID 24712)
-- Name: emprunt emprunt_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY emprunt
    ADD CONSTRAINT emprunt_pkey PRIMARY KEY (id);


--
-- TOC entry 2022 (class 2606 OID 24720)
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY media
    ADD CONSTRAINT media_pkey PRIMARY KEY (id);


--
-- TOC entry 2023 (class 2606 OID 24721)
-- Name: adherent fk_18ilbxpff22y0nsi4v6v39koy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY adherent
    ADD CONSTRAINT fk_18ilbxpff22y0nsi4v6v39koy FOREIGN KEY (cotisation_id) REFERENCES cotisation(id);


--
-- TOC entry 2025 (class 2606 OID 24731)
-- Name: emprunt fk_fpaa0yy8obmffmxpuuu4wrkiu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY emprunt
    ADD CONSTRAINT fk_fpaa0yy8obmffmxpuuu4wrkiu FOREIGN KEY (media_id) REFERENCES media(id);


--
-- TOC entry 2024 (class 2606 OID 24726)
-- Name: emprunt fk_hb6nj3tmqml5wh5tirvnio43m; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY emprunt
    ADD CONSTRAINT fk_hb6nj3tmqml5wh5tirvnio43m FOREIGN KEY (adherent_id) REFERENCES adherent(id);


--
-- TOC entry 2154 (class 0 OID 0)
-- Dependencies: 3
-- Name: public; Type: ACL; Schema: -; Owner: mediatic
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO mediatic;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-03-31 14:58:47

--
-- PostgreSQL database dump complete
--

