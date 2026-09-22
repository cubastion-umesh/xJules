/**
 * SAP Enterprise Portal Prototype JS for NHIDCL
 */

// Initial Data Store
const store = {
    transactions: [
        { doc: '500018921', tcode: 'ML81N', module: 'Contract', details: 'RA Bill #04 - Imphal-Kohima Highway Construction', amount: '₹ 14.85 Cr', status: 'Pending Approval', statusTag: 'tag-warning' },
        { doc: '100045102', tcode: 'CJ01', module: 'PS', details: 'WBS Creation - Silchar Bypass Tunnel Project', amount: '₹ 420.00 Cr', status: 'Approved', statusTag: 'tag-success' },
        { doc: '450009812', tcode: 'ME21N', module: 'MM', details: 'PO Issued - Bituminous Concrete Supply (50,000 MT)', amount: '₹ 28.40 Cr', status: 'Completed', statusTag: 'tag-info' },
        { doc: '190008431', tcode: 'MIRO', module: 'FICO', details: 'Vendor Payment Post - M/s ABC Infrastructure', amount: '₹ 12.10 Cr', status: 'Posted', statusTag: 'tag-success' },
        { doc: '300012489', tcode: 'IW31', module: 'PM', details: 'Work Order - Heavy Excavator Hydraulic Overhaul', amount: '₹ 8.50 Lakh', status: 'In Progress', statusTag: 'tag-warning' }
    ],
    psProjects: [
        { wbs: 'NHIDCL/PS/NER/001', title: '4-Laning of Dimapur-Kohima Road (Km 123 to 160)', state: 'Nagaland (RO Kohima)', budget: '₹ 840.00 Cr', cost: '₹ 612.40 Cr', physical: '74%', status: 'In Progress', tag: 'tag-warning' },
        { wbs: 'NHIDCL/PS/NER/002', title: 'Construction of Zojila Tunnel Approach Road', state: 'Ladakh (RO Leh)', budget: '₹ 1,250.00 Cr', cost: '₹ 980.10 Cr', physical: '82%', status: 'In Progress', tag: 'tag-warning' },
        { wbs: 'NHIDCL/PS/NER/003', title: '2-Laning with Hard Shoulder of Agartala-Sabroom Section', state: 'Tripura (RO Agartala)', budget: '₹ 380.00 Cr', cost: '₹ 380.00 Cr', physical: '100%', status: 'Approved', tag: 'tag-success' },
        { wbs: 'NHIDCL/PS/NER/004', title: 'Silchar-Churaibari Highway Expansion Phase-II', state: 'Assam (RO Silchar)', budget: '₹ 510.00 Cr', cost: '₹ 120.00 Cr', physical: '25%', status: 'Under Review', tag: 'tag-neutral' }
    ],
    ficoVouchers: [
        { voucher: 'FICO/2026/0891', vendor: 'M/s Hilltop Constructions Pvt Ltd', wbs: 'NHIDCL/PS/NER/001', gross: '₹ 14,85,00,000', tds: '₹ 29,70,000', net: '₹ 14,55,30,000', status: 'Verified - Ready for F110', tag: 'tag-success' },
        { voucher: 'FICO/2026/0892', vendor: 'M/s Northeast Earthmovers Ltd', wbs: 'NHIDCL/PS/NER/002', gross: '₹ 6,20,00,000', tds: '₹ 12,40,000', net: '₹ 6,07,60,000', status: 'Under Audit Review', tag: 'tag-warning' },
        { voucher: 'FICO/2026/0893', vendor: 'M/s Himalayan Geo-Tech Consultants', wbs: 'NHIDCL/PS/NER/004', gross: '₹ 45,00,000', tds: '₹ 90,000', net: '₹ 44,10,000', status: 'Payment Processed', tag: 'tag-info' }
    ],
    mmOrders: [
        { id: 'PR-10029341', desc: 'High Grade TFR Steel Reinforcement Bars (2,500 MT)', plant: 'Plant 1001 (Leh-Ladakh)', qty: '2,500 MT', value: '₹ 16.25 Cr', vendor: 'Tender Stage', stage: 'PR Approved', tag: 'tag-success' },
        { id: 'PO-450009812', desc: 'Bituminous Concrete VG-40 Mix Supply', plant: 'Plant 1002 (Kohima)', qty: '50,000 MT', value: '₹ 28.40 Cr', vendor: 'M/s Highway Polymers', stage: 'PO Released (MIGO Pending)', tag: 'tag-warning' },
        { id: 'MIGO-50012', desc: 'Pre-stressed Concrete Girders for Bridge Chainage 42+100', plant: 'Plant 1003 (Agartala)', qty: '48 Units', value: '₹ 9.60 Cr', vendor: 'M/s Precast Structures Ltd', stage: 'GRN Completed', tag: 'tag-info' }
    ],
    contractBills: [
        { billNo: 'RA-BILL/04', contractNo: 'NHIDCL/CONTRACT/2024/881', contractor: 'M/s Hilltop Constructions Pvt Ltd', mbRef: 'MB #104 (Page 45-60)', claimed: '₹ 15.20 Cr', verified: '₹ 14.85 Cr', status: 'Pending Executive Approval', tag: 'tag-warning' },
        { billNo: 'RA-BILL/12', contractNo: 'NHIDCL/CONTRACT/2023/412', contractor: 'M/s Brahmaputra Infra Engineering', mbRef: 'MB #089 (Page 12-28)', claimed: '₹ 8.40 Cr', verified: '₹ 8.40 Cr', status: 'Approved for Payment', tag: 'tag-success' },
        { billNo: 'RA-BILL/01', contractNo: 'NHIDCL/CONTRACT/2025/102', contractor: 'M/s Eastern Slope Stabilizers', mbRef: 'MB #012 (Page 01-10)', claimed: '₹ 3.10 Cr', verified: 'Under Field Verification', status: 'Under Review', tag: 'tag-neutral' }
    ],
    pmEquipment: [
        { id: 'EQP-NH-0412', name: 'CAT 336 Excavator (Heavy Earthmover)', location: 'Zojila Tunnel Site (RO Leh)', type: 'Preventive Service', lastService: '12-Feb-2026', status: 'Operational', tag: 'tag-success' },
        { id: 'EQP-NH-0891', name: 'Vögele Asphalt Paver Super 1800', location: 'Dimapur-Kohima Stretch', type: 'Hydraulic Breakdown', lastService: '28-Jan-2026', status: 'Under Breakdown (IW31 Active)', tag: 'tag-danger' },
        { id: 'EQP-NH-0104', name: 'Putzmeister Concrete Boom Pump', location: 'Silchar Bypass Bridge', type: 'Routine Calibration', lastService: '01-Mar-2026', status: 'Operational', tag: 'tag-success' }
    ],
    landParcels: [
        { id: 'LA-NAG-2024-08', location: 'Phesama Village (Km 140.2 to 142.8)', area: '14.25 Ha', gazette: '3D Published (Gazette #412)', award: '₹ 34.80 Cr', status: 'Disbursement 85% Complete', tag: 'tag-warning' },
        { id: 'LA-LAD-2025-01', location: 'Minamarg Slope Stretch (Km 52.0)', area: '8.10 Ha', gazette: '3A Published (Gazette #102)', award: '₹ 18.50 Cr', status: 'CALA Joint Verification', tag: 'tag-neutral' },
        { id: 'LA-TRP-2023-19', location: 'Sabroom Border Corridor (Km 88.5)', area: '22.00 Ha', gazette: '3G Award Finalized', award: '₹ 52.00 Cr', status: '100% Compensation Disbursed', tag: 'tag-success' }
    ],
    hcmEmployees: [
        { id: 'NH/EMP/0142', name: 'Er. Rajesh Kumar Sharma', designation: 'General Manager (Tech / Projects)', posting: 'RO Kohima, Nagaland', wbs: 'NHIDCL/PS/NER/001', contact: 'r.sharma@nhidcl.in', status: 'Active (On Site)', tag: 'tag-success' },
        { id: 'NH/EMP/0289', name: 'Sunil V. Deshmukh', designation: 'Deputy General Manager (Finance)', posting: 'HQ New Delhi', wbs: 'All HQ Projects', contact: 's.deshmukh@nhidcl.in', status: 'Active (HQ)', tag: 'tag-info' },
        { id: 'NH/EMP/0411', name: 'Er. Anita P. Roy', designation: 'Executive Engineer (Quality Control)', posting: 'RO Leh, Ladakh', wbs: 'NHIDCL/PS/NER/002', contact: 'a.roy@nhidcl.in', status: 'Active (On Site)', tag: 'tag-success' }
    ],
    qmInspections: [
        { lot: 'LOT-QM-2026-091', sample: 'Bituminous Concrete VG-40 Layer', chainage: 'Km 134+200 (Kohima)', inspector: 'Er. Anita P. Roy', result: 'Bitumen Content 5.2% (Pass)', status: 'Cleared for Paving', tag: 'tag-success' },
        { lot: 'LOT-QM-2026-092', sample: 'M40 Concrete Cube Test (28-Day)', chainage: 'Bridge Pier #3 (Silchar)', inspector: 'M/s Third Party Lab', result: 'Compressive Strength 44.5 MPa', status: 'Cleared for Load Test', tag: 'tag-success' },
        { lot: 'LOT-QM-2026-093', sample: 'Aggregates Impact Value Test', chainage: 'Km 48+000 (Zojila)', inspector: 'Er. A. K. Singh', result: 'AIV 28% (Exceeds 24% limit)', status: 'Rejected / Re-sampling', tag: 'tag-danger' }
    ],
    workflows: [
        { id: 'WF-99012', process: 'RA Bill Clearance (ML81N)', submitter: 'M/s Hilltop Constructions', details: 'RA Bill #04 - Value ₹ 14.85 Cr', date: '04-Mar-2026' },
        { id: 'WF-99015', process: 'Purchase Requisition (ME51N)', submitter: 'RO Leh Site Office', details: 'High Grade Steel - Value ₹ 16.25 Cr', date: '05-Mar-2026' },
        { id: 'WF-99018', process: 'Land Compensation Award (RE-FX)', submitter: 'CALA Office Nagaland', details: 'Phesama Village Land Parcel - ₹ 34.80 Cr', date: '06-Mar-2026' }
    ]
};

// DOM Loaded Event Listener
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initRenderers();
    initModalHandlers();
    initGlobalSearch();
    initRoleSwitching();
});

// Sidebar View Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const viewPanels = document.querySelectorAll('.view-panel');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
    const sidebar = document.getElementById('sidebar');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            viewPanels.forEach(panel => {
                if (panel.id === `view-${targetView}`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Quick Launch Tile Action Binding
    document.querySelectorAll('.tcode-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const action = tile.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // Refresh Dashboard Button
    const refreshBtn = document.getElementById('btn-refresh-dash');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            showToast('Refreshing real-time SAP process data...', 'info');
            renderAllTables();
        });
    }

    // Quick Process Button
    const quickProcessBtn = document.getElementById('btn-quick-process');
    if (quickProcessBtn) {
        quickProcessBtn.addEventListener('click', () => {
            openGenericModal('Initiate Standard SAP Process', `
                <div class="form-group">
                    <label>Select SAP Functional Process / T-Code</label>
                    <select id="quick-tcode-select" class="form-control">
                        <option value="CJ01">CJ01 - Create Project WBS</option>
                        <option value="ME51N">ME51N - Purchase Requisition</option>
                        <option value="ML81N">ML81N - Service Entry Sheet / RA Bill</option>
                        <option value="MIRO">MIRO - Post Vendor Invoice</option>
                        <option value="IW31">IW31 - Create Maintenance Work Order</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Project / WBS Context</label>
                    <input type="text" id="quick-wbs-input" class="form-control" value="NHIDCL/PS/NER/001">
                </div>
            `, () => {
                const tcode = document.getElementById('quick-tcode-select').value;
                showToast(`Process ${tcode} initiated successfully. Document routing triggered.`, 'success');
                closeModal();
            });
        });
    }
}

// Render Data to Tables
function initRenderers() {
    renderAllTables();
}

function renderAllTables() {
    renderRecentTransactions();
    renderPSProjects();
    renderFicoVouchers();
    renderMMOrders();
    renderContractBills();
    renderPMEquipment();
    renderLandParcels();
    renderHCMEmployees();
    renderQMInspections();
    renderWorkflowApprovals();
}

function renderRecentTransactions() {
    const tbody = document.getElementById('recent-transactions-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.transactions.map(t => `
        <tr>
            <td><strong>${t.doc}</strong> <br><small class="text-secondary">${t.tcode}</small></td>
            <td><span class="tag tag-neutral">${t.module}</span></td>
            <td>${t.details}</td>
            <td><strong>${t.amount}</strong></td>
            <td><span class="tag ${t.statusTag}">${t.status}</span></td>
        </tr>
    `).join('');
}

function renderPSProjects() {
    const tbody = document.getElementById('ps-projects-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.psProjects.map(p => `
        <tr>
            <td><code>${p.wbs}</code></td>
            <td><strong>${p.title}</strong></td>
            <td>${p.state}</td>
            <td>${p.budget}</td>
            <td>${p.cost}</td>
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span>${p.physical}</span>
                    <div style="flex:1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                        <div style="width: ${p.physical}; height: 100%; background: var(--sap-blue);"></div>
                    </div>
                </div>
            </td>
            <td><span class="tag ${p.tag}">${p.status}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="showToast('Loading WBS Structure for ${p.wbs}...', 'info')">CJ20N Builder</button></td>
        </tr>
    `).join('');
}

function renderFicoVouchers() {
    const tbody = document.getElementById('fico-vouchers-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.ficoVouchers.map(v => `
        <tr>
            <td><strong>${v.voucher}</strong></td>
            <td>${v.vendor}</td>
            <td><code>${v.wbs}</code></td>
            <td>${v.gross}</td>
            <td class="text-danger">${v.tds}</td>
            <td><strong>${v.net}</strong></td>
            <td><span class="tag ${v.tag}">${v.status}</span></td>
            <td><button class="btn btn-sm btn-primary" onclick="showToast('Executing Payment Voucher ${v.voucher}...', 'success')">Post F110</button></td>
        </tr>
    `).join('');
}

function renderMMOrders() {
    const tbody = document.getElementById('mm-orders-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.mmOrders.map(m => `
        <tr>
            <td><strong>${m.id}</strong></td>
            <td>${m.desc}</td>
            <td>${m.plant}</td>
            <td>${m.qty}</td>
            <td><strong>${m.value}</strong></td>
            <td>${m.vendor}</td>
            <td><span class="tag ${m.tag}">${m.stage}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="showToast('Opening MIGO Goods Receipt for ${m.id}...', 'info')">MIGO Receipt</button></td>
        </tr>
    `).join('');
}

function renderContractBills() {
    const tbody = document.getElementById('contract-bills-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.contractBills.map(b => `
        <tr>
            <td><strong>${b.billNo}</strong></td>
            <td><code>${b.contractNo}</code></td>
            <td>${b.contractor}</td>
            <td>${b.mbRef}</td>
            <td>${b.claimed}</td>
            <td><strong>${b.verified}</strong></td>
            <td><span class="tag ${b.tag}">${b.status}</span></td>
            <td><button class="btn btn-sm btn-primary" onclick="showToast('Approving RA Bill ${b.billNo}...', 'success')">Approve Bill</button></td>
        </tr>
    `).join('');
}

function renderPMEquipment() {
    const tbody = document.getElementById('pm-equipment-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.pmEquipment.map(e => `
        <tr>
            <td><code>${e.id}</code></td>
            <td><strong>${e.name}</strong></td>
            <td>${e.location}</td>
            <td>${e.type}</td>
            <td>${e.lastService}</td>
            <td><span class="tag ${e.tag}">${e.status}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="showToast('Opening Maintenance Log IW32 for ${e.id}...', 'info')">Log Ticket</button></td>
        </tr>
    `).join('');
}

function renderLandParcels() {
    const tbody = document.getElementById('land-parcels-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.landParcels.map(l => `
        <tr>
            <td><code>${l.id}</code></td>
            <td><strong>${l.location}</strong></td>
            <td>${l.area}</td>
            <td>${l.gazette}</td>
            <td><strong>${l.award}</strong></td>
            <td><span class="tag ${l.tag}">${l.status}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="showToast('Opening CALA Valuation File for ${l.id}...', 'info')">View Details</button></td>
        </tr>
    `).join('');
}

function renderHCMEmployees() {
    const tbody = document.getElementById('hcm-employees-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.hcmEmployees.map(h => `
        <tr>
            <td><code>${h.id}</code></td>
            <td><strong>${h.name}</strong></td>
            <td>${h.designation}</td>
            <td>${h.posting}</td>
            <td><code>${h.wbs}</code></td>
            <td>${h.contact}</td>
            <td><span class="tag ${h.tag}">${h.status}</span></td>
        </tr>
    `).join('');
}

function renderQMInspections() {
    const tbody = document.getElementById('qm-inspections-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.qmInspections.map(q => `
        <tr>
            <td><strong>${q.lot}</strong></td>
            <td>${q.sample}</td>
            <td>${q.chainage}</td>
            <td>${q.inspector}</td>
            <td><strong>${q.result}</strong></td>
            <td><span class="tag ${q.tag}">${q.status}</span></td>
            <td><button class="btn btn-sm btn-secondary" onclick="showToast('Opening Quality Certificate QA03 for ${q.lot}...', 'info')">Certify</button></td>
        </tr>
    `).join('');
}

function renderWorkflowApprovals() {
    const tbody = document.getElementById('workflow-approvals-tbody');
    if (!tbody) return;
    tbody.innerHTML = store.workflows.map(w => `
        <tr id="wf-row-${w.id}">
            <td><code>${w.id}</code></td>
            <td><strong>${w.process}</strong></td>
            <td>${w.submitter}</td>
            <td>${w.details}</td>
            <td>${w.date}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="approveWorkflow('${w.id}')"><i class="fas fa-check"></i> Approve</button>
                <button class="btn btn-sm btn-secondary" onclick="rejectWorkflow('${w.id}')"><i class="fas fa-times"></i> Reject</button>
            </td>
        </tr>
    `).join('');
}

function approveWorkflow(id) {
    const row = document.getElementById(`wf-row-${id}`);
    if (row) {
        row.style.opacity = '0.4';
        row.innerHTML = `<td colspan="6" class="text-success"><i class="fas fa-check-circle"></i> Workflow Item ${id} Approved & Passed to FICO Settlement.</td>`;
        showToast(`Workflow ${id} approved successfully.`, 'success');
    }
}

function rejectWorkflow(id) {
    const row = document.getElementById(`wf-row-${id}`);
    if (row) {
        row.style.opacity = '0.4';
        row.innerHTML = `<td colspan="6" class="text-danger"><i class="fas fa-exclamation-circle"></i> Workflow Item ${id} Rejected & Returned to Creator.</td>`;
        showToast(`Workflow ${id} returned with remarks.`, 'warning');
    }
}

// Quick Actions Handler
function handleQuickAction(action) {
    switch (action) {
        case 'open-modal-ps-create':
            openGenericModal('Create WBS Project Charter (CJ01)', `
                <div class="form-group">
                    <label>Project Title / Highway Stretch</label>
                    <input type="text" id="m-ps-title" class="form-control" placeholder="e.g. 4-Laning Imphal-Moreh Section">
                </div>
                <div class="form-group">
                    <label>Regional Office (RO)</label>
                    <select id="m-ps-ro" class="form-control">
                        <option value="RO Kohima">RO Kohima (Nagaland)</option>
                        <option value="RO Leh">RO Leh (Ladakh)</option>
                        <option value="RO Agartala">RO Agartala (Tripura)</option>
                        <option value="RO Guwahati">RO Guwahati (Assam)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Sanctioned Project Budget (₹ Crores)</label>
                    <input type="number" id="m-ps-budget" class="form-control" placeholder="500">
                </div>
            `, () => {
                const title = document.getElementById('m-ps-title').value || 'New Highway Stretch';
                const ro = document.getElementById('m-ps-ro').value;
                const budget = document.getElementById('m-ps-budget').value || '350';

                const newWbs = `NHIDCL/PS/NER/00${store.psProjects.length + 1}`;
                store.psProjects.unshift({
                    wbs: newWbs,
                    title: title,
                    state: ro,
                    budget: `₹ ${budget}.00 Cr`,
                    cost: '₹ 0.00 Cr',
                    physical: '0%',
                    status: 'In Progress',
                    tag: 'tag-warning'
                });
                renderPSProjects();
                showToast(`Project ${newWbs} created and WBS charter initialized.`, 'success');
                closeModal();
            });
            break;

        case 'open-modal-mm-pr':
            openGenericModal('Create Purchase Requisition (ME51N)', `
                <div class="form-group">
                    <label>Material / Service Description</label>
                    <input type="text" id="m-mm-desc" class="form-control" placeholder="e.g. Guard Rails & Crash Barriers">
                </div>
                <div class="form-group">
                    <label>Plant / Site Location</label>
                    <input type="text" id="m-mm-plant" class="form-control" value="Plant 1001 (RO Kohima)">
                </div>
                <div class="form-group">
                    <label>Estimated Total Value (₹ Crores)</label>
                    <input type="number" id="m-mm-val" class="form-control" placeholder="12.50">
                </div>
            `, () => {
                const desc = document.getElementById('m-mm-desc').value || 'Construction Material Demand';
                const plant = document.getElementById('m-mm-plant').value;
                const val = document.getElementById('m-mm-val').value || '5.00';

                const prId = `PR-100${Math.floor(1000 + Math.random() * 9000)}`;
                store.mmOrders.unshift({
                    id: prId,
                    desc: desc,
                    plant: plant,
                    qty: 'As per BOQ',
                    value: `₹ ${val} Cr`,
                    vendor: 'Tender Stage',
                    stage: 'PR Approved',
                    tag: 'tag-success'
                });
                renderMMOrders();
                showToast(`Purchase Requisition ${prId} created.`, 'success');
                closeModal();
            });
            break;

        case 'open-modal-ra-bill':
            openGenericModal('Submit Contractor RA Bill (ML81N)', `
                <div class="form-group">
                    <label>Contract Agreement Number</label>
                    <input type="text" id="m-ra-contract" class="form-control" value="NHIDCL/CONTRACT/2025/102">
                </div>
                <div class="form-group">
                    <label>Contractor Name</label>
                    <input type="text" id="m-ra-contractor" class="form-control" placeholder="e.g. M/s XYZ Infrastructure">
                </div>
                <div class="form-group">
                    <label>Claimed Amount (₹ Crores)</label>
                    <input type="number" id="m-ra-amount" class="form-control" placeholder="10.50">
                </div>
            `, () => {
                const contractor = document.getElementById('m-ra-contractor').value || 'M/s Infra Builders';
                const amount = document.getElementById('m-ra-amount').value || '10.50';

                const billNo = `RA-BILL/0${store.contractBills.length + 1}`;
                store.contractBills.unshift({
                    billNo: billNo,
                    contractNo: 'NHIDCL/CONTRACT/2025/102',
                    contractor: contractor,
                    mbRef: 'MB #112 (Page 01-15)',
                    claimed: `₹ ${amount} Cr`,
                    verified: `₹ ${amount} Cr`,
                    status: 'Under Review',
                    tag: 'tag-neutral'
                });
                renderContractBills();
                showToast(`RA Bill ${billNo} submitted for field measurement verification.`, 'success');
                closeModal();
            });
            break;

        case 'open-modal-fico-payment':
            openGenericModal('Post Vendor Invoice (MIRO / F110)', `
                <div class="form-group">
                    <label>Vendor Name</label>
                    <input type="text" id="m-fico-vendor" class="form-control" placeholder="e.g. M/s Hilltop Constructions">
                </div>
                <div class="form-group">
                    <label>Gross Invoice Amount (₹)</label>
                    <input type="text" id="m-fico-gross" class="form-control" placeholder="₹ 5,00,00,000">
                </div>
            `, () => {
                const vendor = document.getElementById('m-fico-vendor').value || 'M/s Associated Highway Engineers';
                const gross = document.getElementById('m-fico-gross').value || '₹ 5,00,00,000';

                const voucher = `FICO/2026/0${Math.floor(800 + Math.random() * 100)}`;
                store.ficoVouchers.unshift({
                    voucher: voucher,
                    vendor: vendor,
                    wbs: 'NHIDCL/PS/NER/001',
                    gross: gross,
                    tds: '2%',
                    net: gross,
                    status: 'Verified - Ready for F110',
                    tag: 'tag-success'
                });
                renderFicoVouchers();
                showToast(`MIRO Invoice Voucher ${voucher} posted to General Ledger.`, 'success');
                closeModal();
            });
            break;

        case 'open-modal-pm-order':
            openGenericModal('Create Maintenance Work Order (IW31)', `
                <div class="form-group">
                    <label>Equipment / Asset Name</label>
                    <input type="text" id="m-pm-eqp" class="form-control" placeholder="e.g. Heavy Motor Grader #02">
                </div>
                <div class="form-group">
                    <label>Maintenance Type</label>
                    <select id="m-pm-type" class="form-control">
                        <option value="Engine Overhaul">Engine Overhaul</option>
                        <option value="Hydraulic System Service">Hydraulic System Service</option>
                        <option value="Preventive Inspection">Preventive Inspection</option>
                    </select>
                </div>
            `, () => {
                const eqp = document.getElementById('m-pm-eqp').value || 'Volvo Heavy Crawler Crane';
                const type = document.getElementById('m-pm-type').value;

                store.pmEquipment.unshift({
                    id: `EQP-NH-0${Math.floor(100 + Math.random() * 800)}`,
                    name: eqp,
                    location: 'RO Kohima',
                    type: type,
                    lastService: '06-Mar-2026',
                    status: 'Operational',
                    tag: 'tag-success'
                });
                renderPMEquipment();
                showToast(`Work Order IW31 created for ${eqp}.`, 'success');
                closeModal();
            });
            break;

        case 'open-modal-land-parcel':
            openGenericModal('Register Land Acquisition Parcel (RE-FX)', `
                <div class="form-group">
                    <label>Village / Stretch Location</label>
                    <input type="text" id="m-land-loc" class="form-control" placeholder="e.g. Zubza Stretch Km 115">
                </div>
                <div class="form-group">
                    <label>Compensation Award Amount (₹ Crores)</label>
                    <input type="number" id="m-land-award" class="form-control" placeholder="15.00">
                </div>
            `, () => {
                const loc = document.getElementById('m-land-loc').value || 'Zubza Stretch Km 115';
                const award = document.getElementById('m-land-award').value || '15.00';

                const id = `LA-NAG-2026-0${store.landParcels.length + 1}`;
                store.landParcels.unshift({
                    id: id,
                    location: loc,
                    area: '5.50 Ha',
                    gazette: '3A Published',
                    award: `₹ ${award} Cr`,
                    status: 'CALA Joint Verification',
                    tag: 'tag-neutral'
                });
                renderLandParcels();
                showToast(`Land Parcel ${id} registered under RE-FX module.`, 'success');
                closeModal();
            });
            break;

        default:
            showToast('Module action initialized.', 'info');
            break;
    }
}

// Modal Dialog Helpers
function initModalHandlers() {
    const closeBtn = document.getElementById('modal-close-btn');
    const cancelBtn = document.getElementById('modal-cancel-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
}

function openGenericModal(title, bodyHtml, onSubmit) {
    const modal = document.getElementById('generic-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');
    const submitBtn = document.getElementById('modal-submit-btn');

    modalTitle.innerText = title;
    modalBody.innerHTML = bodyHtml;

    // Clone & replace button to clear previous listeners
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);

    newSubmitBtn.addEventListener('click', onSubmit);

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('generic-modal');
    if (modal) modal.classList.remove('active');
}

// Global Search
function initGlobalSearch() {
    const searchInput = document.getElementById('global-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim().toUpperCase();
            if (query) {
                showToast(`Searching SAP Registry for "${query}"...`, 'info');
            }
        }
    });
}

// Role Switching
function initRoleSwitching() {
    const roleSelect = document.getElementById('user-role-select');
    if (!roleSelect) return;

    roleSelect.addEventListener('change', (e) => {
        const role = e.target.value;
        showToast(`Switched active view profile to: ${e.target.options[e.target.selectedIndex].text}`, 'info');
    });
}

// Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'danger') icon = 'fa-exclamation-circle';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
