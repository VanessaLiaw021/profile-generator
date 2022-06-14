const fs = require("fs");

const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "gray";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";
    if (type === "BSD") color = "goldenrod";
  
    return (
      `<h3>License</h3>
    <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" height="44" />`
    );
};

//Create mokup of html page
const generateMarkup = ({ name, location, bio, linkedin, github, license }) => {
    const template = (`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    <title>Avatar HTML</title>
</head>
<body>
    <h1>Avatar HTML</h1>
    <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'" />
    <h2>${name}</h2>
    <h3>${location}</h3>
    <p>${bio}</p>
    <a href="${linkedin}">LinkedIn</a>
    <a href="${github}">GitHub</a>
    ${generateLicense(license)}
</body>
</html>
    `);

    fs.writeFileSync("./sample/index.html", template);
    console.log("TEMPLATE GENERATED");
}

module.exports = { generateMarkup };