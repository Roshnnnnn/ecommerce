import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./productListSlice";

import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	StarIcon,
} from "@heroicons/react/20/solid";

export default function ProductList() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	return <div></div>;
}
