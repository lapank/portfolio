import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Web Development',
		path: '/web-development',
		icon: <AiIcons.AiFillCode />,
		cName: 'nav-text'
	},
	{
		title: 'Art & Digital Media',
		path: '/art-digital-media',
		icon: <AiIcons.AiFillEdit />,
		cName: 'nav-text'
	},
	{
		title: 'Product Owner & Project Managment',
		path: '/product-owner-project-management',
		icon: <AiIcons.AiFillReconciliation />,
		cName: 'nav-text'
	},

]