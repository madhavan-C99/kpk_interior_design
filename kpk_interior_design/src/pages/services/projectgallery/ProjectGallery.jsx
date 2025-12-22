import React from 'react'
import './ProjectGallery.css'
import spacelogo from '../../../assets/services/images/Group 5139966.png' 
import thumblogo from '../../../assets/services/images/Group 5139964.png' 
import workflowlogo from '../../../assets/services/images/tdesign_money.png' 
import storagelogo from '../../../assets/services/images/Vector 351.png' 
import drawbacklogo from '../../../assets/services/images/ion_accessibility-outline.png' 


function ProjectGallery() {
    const comparisonData = [
        {   
            id:1,
            logo: spacelogo,
            feature: 'Space Requirement',
            lShape: 'Works best in small and medium homes using two adjoining walls without crowding the layout.',
            uShape: 'Ideal for medium to large kitchens that can support three connected working sides comfortably.',
            parallel: 'Perfect for compact, narrow, or elongated spaces where two walls face each other efficiently.',
        },
        {   
            id:2,
            logo: workflowlogo,
            feature: 'Workflow Efficiency',
            lShape: 'Provides a smooth workflow with a clear path between prep, cooking, and cleaning zones.',
            uShape: 'Offers the most efficient "work triangle," keeping all cooking activities within comfortable reach.',
            parallel: 'Delivers excellent efficiency by separating cooking and cleaning areas into two parallel counters.',
        },
        {   
            id:3,
            logo: storagelogo,
            feature: 'Storage & Counter Space',
            lShape: 'Offers decent storage with upper and lower cabinets along two walls for easy access.',
            uShape: 'Provides the highest storage potential thanks to continuous counters on all three sides.',
            parallel: 'Delivers ample storage and counter length across both opposing walls for maximum usability.',
        },
        {   
            id:4,
            logo: drawbacklogo,
            feature: 'DRAWBACKS',
            lShape: 'Open and easy to move around, making it good for multitasking or family kitchens.',
            uShape: 'Slightly enclosed but provides maximum counter access, ideal for heavy cooking routines.',
            parallel: 'Encourages straight, focused movement, making daily kitchen tasks faster and well organized.',
        },
        {   
            id:5,
            logo: thumblogo,
            feature: 'BEST USE CASE',
            lShape: 'Great for open layouts and households needing a flexible, corner-focused design.',
            uShape: 'Best for users who need extensive workspace, storage, and structured cooking flow.',
            parallel: 'Ideal for active kitchens requiring fast access, clean separation, and efficient workflow daily.',
        }
    ]

    return (
        <>
            <div className='comparison_container2'>
                <div className="table_header_content2">
                    <h2 className="comparison_main_title2">L-Shape, U-Shape & Parallel Modular Kitchen Comparison At KPK Enterprises</h2>
                    <p className="comparison_subtitle2">
                        Recognized for precision and innovation, KPK Enterprises provides the best 
                        affordable modular kitchen designers in Pondicherry. We create functional 
                        L-shape, U-shape, and parallel kitchens tailored for style, efficiency, and durability.
                    </p>
                </div>

                <div className="comparison_table_wrapper2">
                    <table className="kitchen_comparison_table2">
                        <thead>
                            <tr className="comparison_header_row2">
                                <th className="header_feature_cell2_hide"></th> 
                                <th className="header_layout_cell2">L-SHAPE KITCHEN</th>
                                <th className="header_layout_cell2">U-SHAPE KITCHEN</th>
                                <th className="header_layout_cell2">PARALLEL KITCHEN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((data) => (
                                <tr key={data.id} className="comparison_table_row2">
                                    <td className="feature_cell2">
                                        <img src={data.logo} alt={data.feature} />
                                       <p> {data.feature}</p></td>
                                    <td className="layout_cell2">{data.lShape}</td>
                                    <td className="layout_cell2">{data.uShape}</td>
                                    <td className="layout_cell2">{data.parallel}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProjectGallery;