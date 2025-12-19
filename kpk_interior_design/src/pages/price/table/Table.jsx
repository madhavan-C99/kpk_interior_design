import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import '../table/Table.css';
export default function Table() {
  return (
    <>
        {/* Price Over view Table */}
    <section>
        <div className='price-table-title'>
            <h2>Affordable Interior Pricing Overview</h2>
            <p>A simple breakdown of interior design costs with budget-friendly options for customers in Pondicherry and Cuddalore.</p>
        </div>
        <div>
        <section className="price-table">
                <div className="price-table-wrapper">
                    <table className="price-table__table" role="table" aria-label="Price table">
                        <thead>
                            <tr className="price-table__head-row" style={{padding:"15px"}}>
                                <th>Cabinet</th>
                                <th>Basic</th>
                                <th>Medium</th>
                                <th>Pro</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <td className="price-table__td price-table__label">Price</td>
                            <td>1450/sq ft</td>
                            <td>1650/sq ft</td>
                            <td>1850/sq ft</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Water Proof</td>
                            <td className="price-table__icon">
                                <FaCheckCircle />
                            </td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Fire Retardent</td>
                            <td className="price-table__icon"><FaTimesCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Hardware Brand</td>
                            <td>EBCO</td>
                            <td>EBCO</td>
                            <td>HETTICH</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Shutter Laminate</td>
                            <td>VIRGO</td>
                            <td>MERINO</td>
                            <td>GREEN LAM</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Carcass Laminate</td>
                            <td>0.8 OFF WHITE</td>
                            <td>0.8 FABRIC</td>
                            <td>0.8 WOODEN GRAINS</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Material Warranty</td>
                            <td>10 YEARS</td>
                            <td>15 YEARS</td>
                            <td>25 YEARS</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Stain Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Scratch Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Impact Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Anti Ageing</td>
                            <td className="price-table__icon"><FaTimesCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Personalized design</td>
                            <td>OPTIONAL</td>
                            <td>FREE 3D DESIGN</td>
                            <td>FREE 3D DESIGN</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Installation Method</td>
                            <td>Factory Finish</td>
                            <td>Factory Finish</td>
                            <td>Factory Finish</td>
                            </tr>

                            <tr className="price-table__footer-row">
                            <td className="price-table__td price-table__label">KPK Warranty</td>
                            <td>6 years</td>
                            <td>10 years</td>
                            <td>12 years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        
        </div>
    </section>
    </>
  )
}