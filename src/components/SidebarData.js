import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Web Development',
		path: '/developer',
		icon: <AiIcons.AiFillCode />,
		cName: 'nav-text'
	},
	{
		title: 'Art & Digital Media',
		path: '/art',
		icon: <AiIcons.AiFillEdit />,
		cName: 'nav-text'
	},
	{
		title: 'Product Owner & Project Managment',
		path: '/manager',
		icon: <AiIcons.AiFillPieChart />,
		cName: 'nav-text'
	},

]