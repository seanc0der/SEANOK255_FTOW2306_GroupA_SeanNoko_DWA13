/* eslint-disable no-console */
// @ts-check

const provinces = [
	"Western Cape",
	"Gauteng",
	"Northern Cape",
	"Eastern Cape",
	"KwaZulu-Natal",
	"Free State",
];
const names = [
	"Ashwin",
	"Sibongile",
	"Jan-Hendrik",
	"Sifso",
	"Shailen",
	"Frikkie",
];

names.forEach((name) => {
	console.log(name);
});

names.forEach((name, index) => {
	console.log(`${name} (${provinces[index]})`);
});

const newProvinces = provinces.map((province) => province.toUpperCase());
console.log(newProvinces);

const lengthOfNames = names.map((name) => name.length);
console.log(lengthOfNames);

const sortedProvinces = names.toSorted();
console.log(sortedProvinces);

const filteredProvinces = provinces.filter(
	(province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

const containsChar = (name) => name.includes("s") || name.includes("S");
console.log(names.map((name) => [name].some(containsChar)));

const nameCount = names.reduce((accumulator, currentValue, index) => {
	accumulator[currentValue] = provinces[index];
	return accumulator;
}, {});

// Sample data for the additional challenge; to be completed
const products = [
	{ product: "banana", price: "2" },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: "8" },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];
