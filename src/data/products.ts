export type Product = {
  slug: string;
  name: string;
  price: string;
  category: string;
  tone: "teal" | "blue" | "cyan";
};

export const products: Product[] = [
  { slug: "bpc-157", name: "BPC-157", price: "£27.99", category: "Research", tone: "teal" },
  { slug: "bpc-157-tb-500", name: "BPC-157 + TB-500", price: "£24.99", category: "Research blend", tone: "blue" },
  { slug: "cagrilintide", name: "Cagrilintide", price: "£47.99", category: "Research", tone: "cyan" },
  { slug: "cjc-1295-no-dac", name: "CJC-1295 (No DAC)", price: "£27.99", category: "Research", tone: "blue" },
  { slug: "cjc-1295-with-dac", name: "CJC-1295 (With DAC)", price: "£32.99", category: "Research", tone: "teal" },
  { slug: "ghk-cu", name: "GHK-Cu", price: "£29.99", category: "Research", tone: "cyan" },
  { slug: "glow-blend", name: "Glow Blend", price: "£39.99", category: "Research blend", tone: "blue" },
  { slug: "ipamorelin", name: "Ipamorelin", price: "£27.99", category: "Research", tone: "teal" },
  { slug: "melanotan-ii", name: "Melanotan II", price: "£17.99", category: "Research", tone: "cyan" },
  { slug: "mots-c", name: "MOTS-C", price: "£39.99", category: "Research", tone: "blue" },
  { slug: "nad-plus", name: "NAD+", price: "£54.99", category: "Research", tone: "teal" },
  { slug: "bacterial-water", name: "Bacterial Water", price: "£5.49", category: "Research supply", tone: "cyan" },
];
