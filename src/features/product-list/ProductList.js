import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./productListSlice";

// const products = [
// 	{
// 		id: 1,
// 		name: "Basic Tee",
// 		href: "#",
// 		imageSrc:
// 			"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
// 		imageAlt: "Front of men's Basic Tee in black.",
// 		price: "$35",
// 		color: "Black",
// 	},
// ];

import { Fragment } from "react";
import { Dialog, Disclousre, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid";

export default function ProductList() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return <div></div>;
}
