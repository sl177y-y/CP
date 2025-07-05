import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { LuTerminalSquare, LuImage } from "react-icons/lu";
import modelsData from '@/components/AiModel.json';
const AiArena = () => {
  return (
    <>
      <div style={{ margin: "0 auto", marginTop: "25vh", width: "80%" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white", fontWeight: 500 }}>Cluster Arena</h1>
            <p style={{ color: "white", margin: "1vh 0" }}>
              Discover amazing ML apps made by the community!
            </p>
          </div>
          <input
            style={{
              border: "1px solid grey",
              background: "transparent",
              borderRadius: "0.5rem",
              fontSize: "1.3rem",
              color: "white",
              fontFamily: "'Exo 2'",
              padding: "0.3rem 1rem",
            }}
            placeholder="Search Models"
          ></input>
        </div>

        {/* GRID VIEW OF MODELS */}
        <div
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
            display: "grid",
            margin: "7vh 0px",
            gridGap: "2rem 0",
          }}
        >
          {/* Mapping over models data */}
          {modelsData.map((model, index) => (
            <Link key={index} href={`/ai/${model.slug}`}>
              <div
                style={{
                  background: model.backgroundColor,
                  position: "relative",
                  borderRadius: "1rem",
                  width: "23rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "15rem",
                  boxShadow: "0.5rem 0.4rem 00rem " + model.circleColor,
                  overflow: "hidden",
                }}
              >
                {/* Avatar circles */}
                <div
                  style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "50%",
                    top: "-2rem",
                    left: "-2rem",
                    position: "absolute",
                    background: model.circleColor,
                  }}
                ></div>
                <div
                  style={{
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    bottom: "2rem",
                    right: "-2rem",
                    position: "absolute",
                    background: model.circleColor,
                  }}
                ></div>

                {/* Model image */}
                <img
                  src={model.image}
                  style={{
                    height: "15rem",
                    position: "absolute",
                    width: "23rem",
                    objectFit: "contain",
                    top: '-1rem'
                  }}
                ></img>

                {/* Details */}
                <div
                  style={{
                    width: "90%",
                    background: "#ffffff3b",
                    display: "flex",
                    marginTop: "auto",
                    height: "4.4rem",
                    backdropFilter: "blur(0.5rem)",
                    padding: "0 5%",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                >
                  {/* Text Data */}
                  <div
                    style={{
                      width: "18rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <h1 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                      {model.name}
                    </h1>
                    <h1 style={{ fontSize: "1rem", fontWeight: "400" }}>
                      {model.description}
                    </h1>
                  </div>
                  {/* SVG */}
                  <div
                    style={{
                      background: "white",
                      borderRadius: "0.6rem",
                      height: "3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "3rem",
                      margin: "auto",
                    }}
                  >
                    <LuImage size={30}></LuImage>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AiArena;
