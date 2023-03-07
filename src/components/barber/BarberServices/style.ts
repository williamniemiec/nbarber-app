/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({

	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#268596',
		marginLeft: 30,
		marginBottom: 20
	},
	serviceArea: {
		paddingHorizontal: 30,
		marginTop: 30
	},
	serviceItem: {
		flexDirection: 'row',
		marginBottom: 20
	},
	serviceInfo: {
		flex: 1
	},
	serviceName: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#268596'
	},
	servicePrice: {
		fontSize: 14,
		color: '#268596'
	},
	serviceChooseBtn: {
		backgroundColor: '#268596',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 15
	},
	serviceChooseBtnText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 14
	},
});
