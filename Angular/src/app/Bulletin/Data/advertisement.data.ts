import {Box} from "../../Shared/box";

export const data: Box [] = [
  {
    state: 0,
    href: '',
    text: [
      {
        header: 'Advertisements',
        body: `
           <table id="example" class="display dataTable no-footer" width="100%" border="2" cellpadding="5"
                               cellspacing="0" bordercolor="#CCCCCC" role="grid" aria-describedby="example_info">
                            <thead>
                            <tr role="row">
                                <th height="45" align="center" bgcolor="#083591" class="sorting_disabled" rowspan="1"
                                    colspan="1"><span class="style1">Sr. No</span>
                                </th>
                                <th align="center" bgcolor="#083591" class="sorting_disabled" rowspan="1" colspan="1">
                                    <span class="style1">Date </span>
                                </th>
                                <th align="center" bgcolor="#083591" class="sorting_disabled" rowspan="1" colspan="1">
                                    <span class="style1">Subject</span>
                                </th>
                                <th align="center" bgcolor="#083591" class="sorting_disabled" rowspan="1" colspan="1">
                                    <span class="style1">Attachment </span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="row odd" role="row">
                                <td align="center">34</td>
                                <td>15/03/2017</td>
                                <td id="sublinktxt15"><a>Issue of Corrigendum No.1 Extension of last date of reciept of
                                    Bids in respect of RFP selection for SWAYAM Project</a></td>
                                <td id="sublinktxt"><a href="../downloads/swayamCorrigendum_new.pdf" target="_blank">Advertisement</a>
                                </td>
                            </tr>
                            <tr class="row even" role="row">
                                <td align="center">33</td>
                                <td>02/03/2017</td>
                                <td id="sublinktxt15"><a>"Smart India Hackathon - 2017 Grand Finale" - Mentor
                                    Registration before 7th March, 2017.</a></td>
                                <td id="sublinktxt"><a href="../downloads/SIH_Grand_Finale.pdf" target="_blank">Advertisement</a>
                                </td>
                            </tr>
                            <tr class="row odd" role="row">
                                <td align="center">32</td>
                                <td>14/02/2017</td>
                                <td id="sublinktxt15"><a>Request for Proposal for selection of application support and
                                    Helpdesk services for SWAYAM MOOCs Platform</a></td>
                                <td id="sublinktxt"><a href="../downloads/mooc.pdf" target="_blank">Advertisement</a>
                                </td>
                            </tr>
                            <tr class="row even" role="row">
                                <td align="center">31</td>
                                <td>23/01/2017</td>
                                <td id="sublinktxt15"><a>Quality Improvement Programme (QIP) for Teachers of Polytechnic
                                    Institutions</a></td>
                                <td id="sublinktxt"><a href="../downloads/QIP_poly_advt.pdf" target="_blank">Advertisement</a>
                                </td>
                            </tr>
                            <tr class="row odd" role="row">
                                <td align="center">30</td>
                                <td>03/01/2017</td>
                                <td id="sublinktxt15"><a>Corrigendum for House keeping services at AICTE HQ.</a></td>
                                <td id="sublinktxt"><a href="../downloads/notice_03_01_2017.pdf" target="_blank">Advertisement</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                       `
      }
    ],
    link: [],
    pdf: []
  }
];
