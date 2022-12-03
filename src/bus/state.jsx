import { createSignal } from 'solid-js'
import CoachImg from '../../assets/coach.png'
import DoubleDeckerImg from '../../assets/doubledecker.png'
import MinibusImg from '../../assets/minibus.png'

const busImages = {
	Coaches: CoachImg,
	'Double Decker': DoubleDeckerImg,
	'Mini Bus': MinibusImg
}

const [bus, setBus] = createSignal(0)
const [busType, setBusType] = createSignal(0)
const [edit, setEdit] = createSignal(false)

let initialBuses = await Promise.resolve(
	Array(3).fill(0).map((_, i) => ({
		plateNumber: (Math.random() + 1).toString(36).substring(7),
		model: ['Volvo', 'Volkswagen'][Math.random() < 0.5 ? 0 : 1],
		category: ['Coaches', 'Double Decker', 'Mini Bus'][i]
	}))
)

const [buses, setBuses] = createSignal([...initialBuses])

const resetBuses = buses => {
	initialBuses = buses
	setBuses(initialBuses)
}

const report = {
	Operator: 'James Coaches',
	'Odometer Reading': '123k miles',
	'Name of Inspector': 'Iurie Bivol',
	'Vehicle Reg/Fleet No': '12 D 1234',
	'Vehicle Make/Model': 'Volvo Srinter',
	Date: new Date().toISOString().split('T')[0].split('-').reverse().join(' / '),
	// Check No., TM no., Item Inspected, Condition v or x, Description of Defect, Rectified By
	'Interior and inside cab': [
		{'TM No.': 1, 'Item Inspected': 'Registration/License/VIN', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 2, 'Item Inspected': 'Vehicle Weights & Dimensions Plate', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 18, 'Item Inspected': 'Warning Triangle', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '9/64', 'Item Inspected': 'Driver and passenger seats', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 10, 'Item Inspected': 'Seat belts', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 8, 'Item Inspected': 'Mirrors', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 11, 'Item Inspected': 'Windows, Ventilation, Glass & view of the road', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 7, 'Item Inspected': 'Windscreen wipers & washers', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '16/69', 'Item Inspected': 'Tachograph/Speedometer', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 6, 'Item Inspected': 'Horm', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 29, 'Item Inspected': 'Gauges, warning devices & malfunction indicators', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 29, 'Item Inspected': 'ABS warning', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 53, 'Item Inspected': 'Driving Controls', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '17/43', 'Item Inspected': 'Steering Control', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 13, 'Item Inspected': 'Service brake pedal', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 14, 'Item Inspected': 'Service Brake Operation (Inspection in Cab)', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 4, 'Item Inspected': 'Pressure/Air/Vacuum wamings', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 5, 'Item Inspected': 'Pressure/Air/Vacuum build-up', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 12, 'Item Inspected': 'Mechanical Brake Hand Levers', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 15, 'Item Inspected': 'Air/Vacuum Hand Control Valves', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '9/22', 'Item Inspected': 'Driver\'s accommodation', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': 'Accessibity features', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 63, 'Item Inspected': 'Emergency Exits', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': '', condition: true, 'Description of Defect': 'Interior of body, passenger entrance, exit steps and platforms', 'Rectified by': ''},
		{'TM No.': '62/66', 'Item Inspected': 'Fire Extinguisher and First Aid Kit', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 65, 'Item Inspected': 'Interior Lighting', condition: true, 'Description of Defect': '', 'Rectified by': ''}
	],
	'Ground level and under-vehicle': [
		{'TM No.': '2/22', 'Item Inspected': 'Condition & Security of body & bumpers', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 3, 'Item Inspected': 'Exhaust Smoke emission', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 27, 'Item Inspected': 'Road wheels & hubs', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 25, 'Item Inspected': 'Tyre Specification', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 24, 'Item Inspected': 'Tyre Condition', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 26, 'Item Inspected': 'Tyre Tread', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 32, 'Item Inspected': 'Spare wheel & carrier', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 45, 'Item Inspected': 'Chassis/Underbody', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 67, 'Item Inspected': 'Fuel Cut Off', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '16/70', 'Item Inspected': 'Speed limiter & Plate', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 20, 'Item Inspected': 'Electrical wiring, equipment, batteries', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 53, 'Item Inspected': 'Engine & transmission mountings', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 34, 'Item Inspected': 'Fuel Tanks & system', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 53, 'Item Inspected': 'Oil leaks', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 46, 'Item Inspected': 'Exhaust System/Noise', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 43, 'Item Inspected': 'Steering Mechanism', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 36, 'Item Inspected': 'Steering Alignment', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '50/51/54/55', 'Item Inspected': 'Suspension Units', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '50/51/54/55', 'Item Inspected': 'Suspension Linkage & Pins/Bushes', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 52, 'Item Inspected': 'Shock Absorbers', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 44, 'Item Inspected': 'Asles, stub axes & wheel bearings', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 53, 'Item Inspected': 'Transmission & Final Drive', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 49, 'Item Inspected': 'Brake Lines & Hoses', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 47, 'Item Inspected': 'Brake Wheel Units', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 33, 'Item Inspected': 'Brake Reservoirs/Valves/Master Cylinders/Connections', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 30, 'Item Inspected': 'Brake Fluid', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 48, 'Item Inspected': 'Mechanical Brake Components', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 48, 'Item Inspected': 'Brake Drums/Discs & Linings/Pads', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '56/59', 'Item Inspected': 'Front & Rear lamps & No. Plate Lamps', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 57, 'Item Inspected': 'Stop Lamps', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': 'Fog Lamps', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '59/28', 'Item Inspected': 'Marker Lamps & reflectors', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '60/61', 'Item Inspected': 'Headlamps & Aim', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': 58, 'Item Inspected': 'Direction indicators & hazzard warning lamps', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': 'Additional breaking devices', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': 'Ancillary equipment', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '', 'Item Inspected': 'Other Items', condition: true, 'Description of Defect': '', 'Rectified by': ''}
	],
	'Brake performance (roller brake/decelerometer test)': [
		{'TM No.': '37/38', 'Item Inspected': 'Service brake performance', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '39/40', 'Item Inspected': 'Emergency/Secondary brake performance', condition: true, 'Description of Defect': '', 'Rectified by': ''},
		{'TM No.': '41/42', 'Item Inspected': 'Parking brake performance', condition: true, 'Description of Defect': '', 'Rectified by': ''}
	],
	'Signature of Inspector': 'Beeef', // Date,
	Note: 'All inspections must be conducted by a Suitably Qualified Person',
	SubNote: '(A suitably qualified Person is one who is suitably qualified by academic qualifications or experience or both to carry out Inspections, Maintenance and Repairs on this category of vehicle)',
	'Action Taken on Defects Found': [{'Check No.': '', 'Rectification Action': '', 'Rectified by': ''}],
	Agreement: 'I certify that all defects have been satisfactorily repaired and the vehicle is now fit for service',
	Name: 'Iurie Bivol', Position: 'Head Mechanic', // Date, Signature
	LastNote: 'The Above signatory must be a suitably Qualified Person'
}

const [reportPage, setReportPage] = createSignal(false)


const [issues, setIssues] = createSignal([])
const [miles, setMiles] = createSignal('')
const [inspectorName, setInspectorName] = createSignal('Iurie Bivol')

const [reports, setReports] = createSignal([{
	date: report.Date,
	issues: [],
	inspectorName: 'Iurie Bivol',
	miles: '123k'
}])

export {
	bus, setBus, busType, setBusType, edit, setEdit,
	buses, setBuses, resetBuses, reportPage, setReportPage,
	issues, setIssues, miles, setMiles, reports, setReports, 
	inspectorName, setInspectorName, busImages, report
}
