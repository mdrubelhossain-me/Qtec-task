// src/data/products.js

import watchOne from '../assets/images/p1.jpg';
import watchTwo from '../assets/images/p5.jpg';
import watchThree from '../assets/images/p7.jpg';
import menBelt from '../assets/images/p8.jpg';
import sunglassOne from '../assets/images/p2.jpg';
import sunglassTwo from '../assets/images/p3.jpg';
import womenBagOne from '../assets/images/p4.jpg';
import womenBagTwo from '../assets/images/p6.jpg';

const products = [
  // Watches
  {
    id: 1,
    image: watchOne,
    title: "Classic Leather Watch",
    price: 120.00,
    availability: "In Stock",
    brand: "Timeless",
    category: "Watches",
    sku: "TM-WC-001",
    color: "Brown",
    description: "Elegant leather strap watch with minimalist dial design and quartz movement."
  },
  {
    id: 2,
    image: watchTwo,
    title: "Sporty Digital Watch",
    price: 95.50,
    availability: "In Stock",
    brand: "ActiveGear",
    category: "Watches",
    sku: "AG-WD-002",
    color: "Black",
    description: "Rugged digital watch with stopwatch, water resistance, and LED backlight."
  },
  {
    id: 3,
    image: watchThree,
    title: "Luxury Gold Watch",
    price: 350.00,
    availability: "Out of Stock",
    brand: "EliteTime",
    category: "Watches",
    sku: "ET-WG-003",
    color: "Gold",
    description: "Premium gold-plated watch with sapphire crystal and automatic movement."
  },

  // Men Belt
  {
    id: 4,
    image: menBelt,
    title: "Genuine Leather Belt",
    price: 45.00,
    availability: "In Stock",
    brand: "LeatherCraft",
    category: "Men's Accessories",
    sku: "LC-BLT-004",
    color: "Dark Brown",
    description: "High-quality leather belt with classic buckle, perfect for formal and casual wear."
  },

  // Sunglasses
  {
    id: 5,
    image: sunglassOne,
    title: "Aviator Sunglasses",
    price: 60.00,
    availability: "In Stock",
    brand: "SunGuard",
    category: "Sunglasses",
    sku: "SG-AV-005",
    color: "Black",
    description: "Classic aviator style sunglasses with UV400 protection and polarized lenses."
  },
  {
    id: 6,
    image: sunglassTwo,
    title: "Retro Round Sunglasses",
    price: 55.00,
    availability: "Out of Stock",
    brand: "VintageView",
    category: "Sunglasses",
    sku: "VV-RS-006",
    color: "Tortoise",
    description: "Stylish round frame sunglasses with vintage appeal and scratch-resistant lenses."
  },

  // Women Bags
  {
    id: 7,
    image: womenBagOne,
    title: "Chic Tote Bag",
    price: 80.00,
    availability: "In Stock",
    brand: "Fashionista",
    category: "Women's Bags",
    sku: "FS-TB-007",
    color: "Red",
    description: "Spacious and stylish tote bag made from premium faux leather with sturdy handles."
  },
  {
    id: 8,
    image: womenBagTwo,
    title: "Elegant Clutch Purse",
    price: 45.00,
    availability: "In Stock",
    brand: "Glamour",
    category: "Women's Bags",
    sku: "GL-CP-008",
    color: "Gold",
    description: "Compact clutch purse perfect for evening occasions with a metallic finish."
  },
];

export default products;
