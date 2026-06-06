// e-commerce logic

const supabaseUrl = 'https://jtpjpisfkhquhwlgscom.supabase.co';
const supabaseKey = 'sb_publishable_yKo_-TIWPPHOR60iNZKtgw_PvVof-pP';
const supabaseClient = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

const CART_KEY = 'dynasty_cart';
const USER_KEY = 'dynasty_user';
const ORDERS_KEY = 'dynasty_orders';

const PRODUCTS = [
    {
        id: 1,
        name: "No Risk No Story Tshirt",
        price: 549,
        colors: [{name: 'Black', hex: '#1c1c1c'}],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAn7L9upK0GShi7MboLz0fJFmeBJnzYUUJPzON-CgEtEtC1X14K-MFtuxHgDA-IhduaAcvctO0IPoJLcExeqbknXdA6cuFZTEbfmiJXgAVhs9Yr0m7Cr_CNYAcx5zlFM2wHLS_0uoJTXCa8ntNwLUpycOEU34qbLtJaF25icjuASH2eCFxVdcgGjPONMlfEDX0tw7iQ8bDjufLkN_4cYjvrQQzdN-l2RzvKsH4YFrAqhomXvGnJGl5VPCpd4XToizfsPKTXc_ox438",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCU_RnJ3whcDOEjkJYYpZ_fRPmE70DETUVyC8r7ldTgxbkAo01RDI-yVq5z0SKFniLRB3PcRntwWD07p53NNNZdSmHfyYW6wsitrc9KTatOtmzNOEucDtSb4g7PTtIXeawZBIiLhe3deg0GZJNuPAdqiF3-4CE1HpHxM1tEJEc07A66mFzn7PEkY-dZmECgJQhnKjs7bJnJh2d_yZz7apPA1-HxHVx3IIe005-nHVVqDlwth5XF58ngeyivbGn5WpT23h-8r1FGHE8"
        ],
        description: "Embrace the bold with the No Risk No Story Tshirt. Made for those who make their own rules."
    },
    {
        id: 2,
        name: "Break Rules Tshirt",
        price: 549,
        colors: [{name: 'Black', hex: '#1c1c1c'}],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBLg-EWYDIJuiiz-D_SMCMJzK9-FQj6QBWILL0qo-Oag1lsYYxa44Xkx_sWrrEPyYVoX4XBSuq7-ejrmISs1oUlzsMYjBwIm8OOrXkdOpNZO_Ndmi8X1xc6nODnxDghJ4T_ToLlajEcfQ8gWpdvPGaXRl-l5oLX1H58OS6I5W62zRX4SY9pGDd-Ju2eieoKCewwxm2juHwAdErO8_HlfFOUqWU6tbYkFNRr7Y8_v-GIbc_swlmqoXAxHGhPfNn_bj7oi1XEw1RsLnE",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCVTknUk3oNZ-aboH_RHvsnFitUImS5zK13xvR6JZI-4dA1s5ibmcwxafvZnlrp2lHBMtSYnEPU8hqaZATd5gD0xw5c794ulLrF2WuOGtfmdbcErk3E2e6NO2G412kBrAE50JTAVEeuOo9_rInzn7JHyNz0l6KC8dIceFHpHoNSlqaCCeF3iHVCSjeU7vZ1UpvzyDg0vmVXTutPz5Hpf7CWYAwcYo_w8wfXGIZrhJCeWai8o3qnJeJsFNxbK2bbTCyzARtRnCy6HPs"
        ],
        description: "Redefine streetwear with the Break Rules Tshirt. Premium heavyweight cotton."
    },
    {
        id: 3,
        name: "Loose Lips Tshirt",
        price: 549,
        colors: [{name: 'Black', hex: '#1c1c1c'}],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDFAC4aNTfKVTc5XVSSfJNjVL5_jwz0xUXF8bCizqncNFEvWJ1Zr_iPKWPT4DTkXaOjb8cWqe3GDPWZjw716PHrXgDzUTBiIqz44i2W8Edwe7EKzfmIK5jQ8Rr3dpgUCcpVzzFYMFf_pwHcQo2Iyp6YjYef-7SxXQJtqfrkRHl63SzeyrA4wseKNiy4duMsZjgpPvNKi9asOFYk_W7wcaaJ1OtUU50ozfDOFMHjv3yG2KAYeZSgHvKRgG6TDKT-ka6cjMsRTwvImIA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuArkyy6Y5sDPjIahPp84Zpc7QCBLpgZRzQwFQhLgsEss6BdskUZb32MEK4q8perLuvdgsIjwpvroFkm5khzeCDG0n0Us4poDLHH6HxCz0cRRcAzvA6MG7zEodp2qIu2kOEFrvlvZlpHMIbPnl1Wef8Lvwp_n_G14wbfRE328DCaiKUtTo9HXMXlxWWKa9Ur_smnWxCQb4wOOVPNeHRI662u1sVYCnyCIAbl0dTRZz3GwBGLmS1LpYz3mE7tcv_tkq_PqUHiqzspWRE"
        ],
        description: "Loose Lips sink ships. Make a statement with this premium drop-shoulder tee."
    },
    {
        id: 4,
        name: "Puma Printed Tshirt",
        price: 549,
        colors: [
            {name: 'Black', hex: '#1c1c1c'}, {name: 'Cream', hex: '#F5F5DC'},
            {name: 'Blue', hex: '#4A6FB4'}, {name: 'Tan', hex: '#C2B280'},
            {name: 'Red', hex: '#B22222'}, {name: 'Purple', hex: '#6A5ACD'}
        ],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCjbc8x0nxIFSJQzfmYVh-sqkjEYnUDuIAZWMwsi8iIpR4i8Lc0q87Zk1UB8sL9Umtj13c3MqG76Y9X0rFRVMrL4HBro6cGV4VS_zR8i6cp_AzhX-fLPtu_L-dl-TcEB3IDjGhHUpz0zN03bnkxGQggsxQnS8FyGkRSaUsMHPch7YeB8nFYJdW2S5u6W4yqDyqnlDjOngZEbOhv0-XH2Yts1vn5y7dX3b8iBj1wW6qHmf84WxaeWyvlTmsc3THYuylXDkXAsifA3EM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuApREv3XVqJhM5p-PMCiwC5dsaUC_iYJ-McMFdYPMdz9ayRLKSMSbPX7HtRox742aKnD4ZqKdnC8cxaBh2AWmmx5d2mwm5_BEBC-LpFtTTBi26Qi3ZPj1_gwoJ8-ZGj2ictpkYcqMGchE0UcyV733uyjwOYInGbn5o47Ds8E53i9xlwgRchDOWVZu8yVdVnzM521B4yNL-wqXllzm41Jd3kCk9kwTyh7BxqSZlkMfpUvS42Zr0R9rgI2Zip9lj8e0k0LaglzVaKH6A",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAMKH3jO5JHuF6ufep90awke2jKmiZR0-UYKLPFqK6xyaD667GbtNQCcfy1_0ks8_ssKgBXxWjYv2KomF7OW4K1Ie5pkc97En86XhnxM8Tb6jLjtH2DHwvu1L3aHCYdgwNigv3jqyXYjU6Lcw40TWaMHN-msozy1M312-gd7IyWVQFi256wqCqeX3q_pRYoC8YDd-OGvSSqGWtuhM-3BqFwFdcduIsTJpV2mEZQveLPlNRbKY4HHvEyDEowk1Bcj3t2Akiekx_8LOM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDMieDiyb-R2k-uoxT0HenM3Oc6QJabiNO9aL-M393iTNHIIjRe5ixzyIywwx09htFy9q_z2t1AVijKJ84hU4A5U5l4vNfO3ADv74TiW9q6Ot4VbQY5UIMp6t6Trtxb9OzemgaaVJS-CNTjOTYfNnfXRXhXlqylDVAhDFyk52WOT0agwuaQq_wfjTodVayHdeTQcEcEVacEzax4oW_iUMW-8CGATyGEzY7iL0uUlmcfKpXWRPlD6cHxuB2Pcgdfni0tUKZ9qrNlUk4",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1VcEX8RETBEcKGLMGJGDH_DTnCn2ubMs37LqUkP4H9qssgyVH4SUelbJQzi7OByweiSHVk4Heu7G-1TTV3XH119SwPLk6VBRFi8GZn3MBsZ_StgzTZtltUENvUG4rys1eYw-0RBzVrBSf32gGTLYDYenFE-vZhpjEqjGcssJPiQXmjE1c33N-qwx099qMvkxcpb50kSi2jn2mrPpUl38IZ_tGGnlq62WU6aDhhre3sMNQuOlgrqcPX-s6v6_WloMDM8sur2D0CY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA3isilJtKVg7pocza_QDZcshgHUYcNBELjvC441nYtXTgIlQnXLYCvG2HoK07EltXeJO08fRGCwn247tTPbyuSekzYKyXLGdCxhItI-7qs6jotery5VqCJ5R8l7YoeWuf5wZWeUGYvdZc-ejyhfM7-bhZi0h9hJwgm7bMqrrVR9esrE4iZGK5MNNQ6rvFi-Cw9n0D-8snPRxIWMjaDOiMsw3QHd1nCv31Vj5XjEVNOuBiPVIydi6h-oA37WBNXyZIvCe4W5ojoKWM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC2RpwlV-k4wl9kPRiJhx5pK0x0oZdVtWRxqoUGhNiTBIvSxB-VVa4kVKbbqnDEESz4EjMnnsXY_CakvFvvUl3ejJ-HN6xOgQ0NvJKWwnEa0RvK7-76N0m7cL44PdH2fEMhRSZrAMwOxFQWaFMedQFUX6ksqpvlDCtgKZuRNYi9HttHHl947nNxm_2TbU8wz84y6jnBDglcpThwCNa8bEqZHUdcYbNDX18QxUy9_BuirdVa2BHcO8uzhSz52cDiXNdubwqCsMzka0k",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBcaQPHp_OmjLi9JCY_bIOm_hrYRoRD5bMJGRhJYtsBgyMmX6Ji10HgrHF4mVC-mTRnLGuymppvaZwu-EWQ5kvkCqadFsgsEcrrU_QO1FsbkoCQB-EqrvlvbUTfxp35DWUamSp4xyH9GCglz7wSNQ7CJBVLpTLkiltlDKDsVVcDbYGVy1uykemG5b-q_IIiZEJy1Ow6GiDbTieQ1RVVk2cu0oGTDE5i2mRFSVr4U0beyHEChLgmmJdmru9jkyEYlMeNoPBezXAKE1k",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCCMXyCCtt-piHvaLLJWoUFbN7lVy24cPIRvZy2KVvsMSYi0LfwltMKOSmIT0Mp5zNmuSysG_T-VPwGhCUFZmkXckPHc8IYGnKi2LgluQkskm4hZkn1OzfStUKNcYLSHPwh-42xEPWbchiuMRJ_v_nDQOjAkgt_gcUHZBY8B_jhQR3QBws8LPld9IfczgpdHV0g_NVl4_DCJndTaz9N4RVFbKZ2K4e69qDsd_AROyM9jrUTQnI0q6mziHai3DcK9KUhpKY-XqPzrt8",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDkjXBlJAkniFmYgLYYfupVQx6AU2zd8DsrNFwHyYv69E5dmsuQGSKATmZIoQb-3DdJqHSFArJc-G4KsFo-Rra0wLkHoG0d2lPqRWPiqaYF__4dy3n_dHEGKiR1HAfJNMf-ZD3DvJj2q0SvhSebLhnG2bAWKv5vvd7C_IX-LZIdmWjvuKI1xrpdtBDbu3vJR6aPMhPBn0ninB4AWCatVunpWVkVeqk4U0uaIDFck4AbgX-xyMNTnL6Z37r_qoGjIB5A_zyhC5ZIIWM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAlJymkdCRNHPHRUWWUYOl5Wmh_7xeKWoq7TyGFBDvolZrcSApF_PLXZpt48Mrrke4oCeTfO0kUN8bikQ2xqbKlJaAKtcyarHB4UA7P18YfPaX-zwa0EZiaQsOTh2oZ5OUKJRrQv1OpG19JQVf2w8bn7U2I4te_kBNk3ae3cSveFjddTKxx3yU_J2xXBTBFKdDINditBSfc7TRkY7buDRKgp7_2M9mW7cbPtgFD1QBIe9rbFk7orzksQBW7A0pWjksy0IxE8y0n_XU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAmVEPQ20cF9M5j_yt59vzKZdLSo3ZMlBizs8n6-euf9ln1tIJWg44oy_CebnSbEAvH4JHR-6aO_lWQGcblDkALm_5Bdp2Gpt1vISZuhtmkmdJC5DRB4-4gx5mmwyzHQ0UYWLbznkj6I5KxjzpNAJbl60DYD5G_FGz1cdhOi6ynL_iTebiG4cOrRb837mNQSMXsviQXAytg-yXxTQ33oPbYfTJsmnIEGndfkz7kdLDx9vIh1TrNQE4NI_TjKSKkBxGfLq469geQ04I"
        ],
        description: "Experience ultimate comfort and street-ready style with our signature Puma Printed Tshirt. Crafted from premium heavy-weight cotton."
    },
    {
        id: 5,
        name: "Attitude Tshirt",
        price: 549,
        colors: [{name: 'Black', hex: '#1c1c1c'}],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA3ExH_R15wA2C56cSUvapKKqdMJppLzn4y7Rb_h_wq7tbmbR5GyA2W5DQKq8YaB-JpD-zYBTQmMQERyqPKbkhnlznDICDFrCeOwhaz6JK2f5wYMSv067PfoFIEWUF03JbHy9LdfZufT9XHrkbh_VZ-8dGVNMb78B3-Gp0GBJ-DKkR2KKfUcH7Gq9WyvXFjpFvqwtZp4jGFb83ABSElSH55oh4wvdoAiOhtMUUkYWTIS66BN3-O5MpLILIZuzcdUrWuCE652Ylc-X0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBfqlovGkpQQlu0T4mqx0kdRMcj58ZTgmCUacvR0flLsyX9VWRJgtHqS9w6g95QkS2oaGqxaVtMDFcJaZUy-vAcxplGucmTSIObmr3ZDILSiqa8ODFlxbar4tqxjOgV5Ea52mAlXsi3pgebeJcNge7LBpcDl_ovR-Kc3Fuat-SI3eEOB2jlzJRD6zRAXVFjVAe9kxu8NDhjdJu7MNvDWL6swKY9f7Gjwei8Y4aNSOlhZswUdHOhAswlGHshLiJKmpuQdUtI4D4gN9c"
        ],
        description: "Show off your attitude with this luxury staple."
    },
    {
        id: 6,
        name: "Balenciaga Tshirt",
        price: 499,
        colors: [
            {name: 'Black', hex: '#1c1c1c'}, {name: 'Tan', hex: '#C2B280'},
            {name: 'Olive', hex: '#808000'}, {name: 'Cream', hex: '#F5F5DC'},
            {name: 'Red', hex: '#B22222'}, {name: 'Brown', hex: '#5D4037'}
        ],
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC2_dP2viCQY91bWHz7Y_yw8KJj1T55j2M7jDlxXCX648KV1479MVStgXvTvOGz3402offiwF4ooXFW2Dx0U47aQJczzqKfUx8-JkIuzA_p5F66LsS49Ts2xHVwkcyD4j4YKPL8lyedGteFvlBhudf7OaRhw7qFVSFZCUDfQfU4zP3WG60XTOpVHegghlEkiqpVp5Nwx6X4EX4A2SsvxvkRA0dQKkbYjT_cohOU2T3t5BBFwilNh8b3rdq0m189NQMOmxqESBRBJPA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCvxIDRANyVU1a52qFyqIyfU7q7GZkMwEucAIRhzMa8t5lPQwGL9ObZo1XEOFDuYMFSgYWsXaNU8DIvut8isRPpVAiR1tMGGoA0coGGuS-F-H0JOSNyhWqng8iVTe09PVw8zjopMpRXuIvgL82xrCMgkqOd5TsC-qUYqPNyI8c0JVH10qVYmaD_bV5lqNYB3fvS0GK7pCWUBRDL_pGt88C4Ps4L8z0mQ_MYMJbIxRue-q6CHTsDkAq9IZT2QMyonn3DvXMHV4rJVnc",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDfnkONatcptVduP7vkfv81etakQje1Z-t2J0LFYM8BY-9J31AyR8nbRNldUGkFUOL0iITgxY7C9gR_uB4K8TlMf30Z59N9WHz7Mwa-rrGXJdwvtMqhExjpRbe72S5fm7wywIzHh_o7oIiHMzz-zTeTiG43xDaS1LPzJSV478Hj1Ud0Va9y8uB9rCC7W4TwFBXHUHnBqR1iEGfGmeUi7CC0Bhsg1YEhZtj6KZfkBdXGDCvbCLUB8TxNccvmtb7Bh2H4RAhkEIWS4ks",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAKjzLIKad9Pckxo7IFwYTufp5e3lYV5UJilONGAT9KbQTzwoQGplZ4-0BqADO7tnHORzXYLCjRfAeBDfh--qmqLj_wvdiobsgAJ2uLiqsdUTGDkmTp0N17p7X1xxId_wVP0OgC3dvmbU1egpQ06-Kjy_2PR0oXJEm692qFCHeAOyNQqnMTyVQ0s-1M25c9V42Lmw4TKMu7kYwfpwozvY-rIGHhd4kqQQHbal6M4Tyy3F7aq6FTwebIytkca3sCW6AdqvfaUQGbAHA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Zt3eu1JUDHZseNM_phDdM7lSwk5jIp8TmkpnlP5zXS108H3HCTjm7FmD2U4BhMDFmrb-Jg7YcODpeIrZA_IWuFwILQjtxAQdSr85RZWKEVd211M1ok3Psn8nmtJcWSyE0FPU4zUuh5l-0uv-MR68m-hFLruVI2KZT5fEGGmckXrlV6qU8Qy2i0tlMTWJ0qk-Gysxc63x2kaxkJBKNm-6CWlVO4THWts3LB2FhzHNQcTXkAvHFsGwTKX_I00RXySqV5Mrq4YtL5w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPj6tmo7nZSsPWbbmRbCj3DuQYcdrbBDcQwT6cqs9rDswquvZ8z0YzENDv-9VaVijFgSKx_XtgJniWEbWopJKHOWOd5WCo6OBEgkZiL5voHgAkpTo6vAu5la-JnxtR1RzCYMr_e2ghQmd7RS4zWO_v-Oy4inK7n-jG9SuOCM2O4pmyXL8fZOJfDFX_crxwuv_fDKIBMTk7wacIuz_yrzKrE0QeOQUjlHoEM_4m5_beLjC8oUaoIYubttcEBJSnAPGdZsxVZTLRJM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBcExfgYILhKEAuzVCRXPS354zMMj05AOqryzz8pxHe7wcNHYpThX_0Xnx_ZChGJfns_Yzyrf5TeKUCiJ5jryYPbszNlpNScOoHwqm47SsWBiiIrl7yWtP7c4HkUJ5l-Ue_SkNOk547AXBATNw_Mzaqb2oRmUMuowO7vbnkiAVcwPPkZfxH1_N_61dX4vuP96RIqhiPdMImdbLvhRwfiDEAK5jc68oyqjZEXaqQfiVyuk67cU9_DBBUBKemygVPhSB-MJJCCQJD9SM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCY6eGd1GC-Z4HlVXkWesLQpqNWJHw1aGmboSWeVK3g2XYQNxiLBvTZabuHI6cmSkGhwhz8gcsLFy9e3KVre1tZAXFVOoa9GKL9HC6_vke1icOgbZfN9Sd5FVdu_OxpsfNLC_S8cjtOadpBYE40jOa9vElWpjUcFSKyUCKStcCUqR7N9o2bVq-0m-U3wQs6dP1rhswZj4zDusGTu8wNGAwan2M-ejP6HcRTtTJ1pKEbu09t1z3VYzAA1A9F7LgmkZgacU5UQgrl2PU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDYjGB3aoTYvWY2yO3yx0Td0RzjWgApB4bLe8V-OikX1se5pU7itybMWHOhxqglgFYb_emYaSMPUb7_jBw3yjFe_uZ7iLT4Cybh9ba6M0Nbgg_CT0KP-yVHFzDFh3Dl6Ft8arcK_HXMzGHU87UBs_0pps579oVVusVJLF3HOrPry96pEq4x1rgAM_vfTWnNhKfYSdo0iBgRAoNC-ZBFBx8ntYMPgG6828eS5kpkrLR3tlraoIXfrvE2gv-w7GDURoACU_AVPdRsopc",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBFIQm-B5RQNBKygT_xw-1EFWg2Ho0HCVX0TRh5Kbu8u-AIPxHRRluyBilX-nrDAStu9u6KM4PzveqXsoGGTREvU9SipTiP1NvHSuONxQ1vjpKEy_RW5uwXms9tCSkTW2chCTNJB44jSyU0kWOcJL1PI0LoHzy9fGW1G3YInKkkifWpVmNOMK0MPgo7fw5YlHjOcOM3pLIdD6C1dR4LPlmDJfEz7EafAQJnLQAN4cz6ajuOilxWRFc_NW-4b-RCs2y5-q6dN7zERI0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbQMQRFDALr9BsZbGMV1vfrFxTyMyoADJNCQ9DjR42HNGUvOt650iawDxzjJ6_oQA3Ww1jPhQhnMwHJyExRpr4I7UNVkL0hcm-oluSeXByewDOtaptaSonpsyy5M29tUPS1cm0FgHwuh0V4i4OvD7KiTKhBz1atY6XMF-il74SXCKpRc8QWw4K6L551wjzLN1UhJCOsg_VeLjweW6UAr7VwDXUvdT-lvw6zFLj_2ZC_1JRKSKHkL-1gw6LyjCogO88uu0gRYwfxo0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAB_5c2ZAd6cairRFaeinPbRZo1svNJdInKMnspofTIHfY6X-HptAWezRe58qw2NjQvModV92MkpPj5oaufhKq46O6PUxvUwAFvB3tHw8IsgSIXrftXCBvqSvOD_M4x5hwdIX4BopD0nlCMEiDWFSROaHo1oCaCsLi8aZfNHcMyYq9a1mGouCDSCKS2vI4aIWfBZXsUXbuSukfz5REcpsZarZj9g3JZ7Q-98qZehCLhICblfqi0V06wwWj-c7Ympz2BoPgDC_UDB0Y"
        ],
        description: "Elevated design meets everyday luxury with the Balenciaga Tshirt."
    }
];

// -- Dynamic Product View --
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    let productId = parseInt(params.get('id'));
    if(!productId) {
        // Fallback to default product (Puma Tshirt) if opened directly
        productId = 4;
    }
    
    let product = PRODUCTS.find(p => p.id === productId);
    if(!product) {
        product = PRODUCTS.find(p => p.id === 4);
        if(!product) return;
    }

    // Update Meta
    document.title = product.name.toUpperCase() + " | DYNASTY WEAR'S";
    
    // Update Breadcrumb & Title
    const titleEls = document.querySelectorAll('.dynamic-title');
    titleEls.forEach(el => el.textContent = product.name);
    
    const priceEl = document.querySelector('.dynamic-price');
    if(priceEl) priceEl.textContent = '\u20B9' + product.price;

    const descEl = document.querySelector('.dynamic-desc');
    if(descEl) descEl.textContent = product.description;

    // Update Images
    const imgContainer = document.getElementById('dynamic-images');
    if(imgContainer) {
        imgContainer.innerHTML = '';
        product.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src.includes('=') ? src : src + '=s0'; // Force original 8k maximum quality
            img.alt = product.name;
            img.className = 'w-full h-full object-cover flex-shrink-0 snap-center';
            imgContainer.appendChild(img);
        });
    }

    // Update Colors
    const colorContainer = document.getElementById('dynamic-colors');
    if(colorContainer) {
        colorContainer.innerHTML = '';
        product.colors.forEach((c, index) => {
            const btn = document.createElement('button');
            btn.className = `swatch-btn w-8 h-8 rounded-full border border-surface-variant hover:scale-110 transition-all ${index === 0 ? 'active' : ''}`;
            btn.style.backgroundColor = c.hex;
            btn.title = c.name;
            btn.onclick = function() {
                selectColor(this, c.name, product.id);
            };
            colorContainer.appendChild(btn);
        });
        document.getElementById('color-name').textContent = product.colors[0].name;
    }

    // Update Add to Cart Button
    const btnCart = document.getElementById('btn-add-cart');
    if(btnCart) {
        btnCart.onclick = async function() {
            const size = document.querySelector('.size-btn.active').textContent;
            const color = document.getElementById('color-name').textContent;
            await addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                color: color,
                size: size,
                image: product.images[0]
            });
        };
    }
}

function selectColor(btn, colorName, productId) {
    // Remove active styling from all
    const swatches = document.querySelectorAll('#dynamic-colors .swatch-btn');
    swatches.forEach(s => s.classList.remove('active'));
    
    // Add active styling to clicked
    btn.classList.add('active');
    
    // Update label
    const colorNameEl = document.getElementById('color-name');
    if (colorNameEl) {
        colorNameEl.textContent = colorName;
    }
    
    // Scroll dynamic images slider to the correct color image
    const product = PRODUCTS.find(p => p.id === productId);
    if(product) {
        const colorIndex = product.colors.findIndex(c => c.name === colorName);
        if(colorIndex > -1) {
            const slideIndex = colorIndex * 2;
            const container = document.getElementById('dynamic-images');
            if(container) {
                container.scrollTo({
                    left: container.offsetWidth * slideIndex,
                    behavior: 'smooth'
                });
            }
        }
    }
}

// -- Dynamic Slider --
function scrollDynamicSlider(direction) {
    const container = document.getElementById('dynamic-images');
    if (container) {
        const scrollAmount = container.offsetWidth * direction;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.getElementById('dynamic-images');
    if(imgContainer) {
        imgContainer.addEventListener('scroll', () => {
            const slideWidth = imgContainer.offsetWidth;
            const scrollPos = imgContainer.scrollLeft;
            const currentIndex = Math.round(scrollPos / slideWidth);
            
            // Get productId from URL to find product in PRODUCTS array
            const params = new URLSearchParams(window.location.search);
            let productId = parseInt(params.get('id')) || 4;
            const product = PRODUCTS.find(p => p.id === productId);
            
            if(product && product.colors) {
                // Assuming 2 images per color based on the current 12-image 6-color standard
                let colorIndex = Math.floor(currentIndex / 2);
                if (isNaN(colorIndex)) return;
                if (colorIndex < 0) colorIndex = 0;
                if (colorIndex >= product.colors.length) colorIndex = product.colors.length - 1;
                
                const colorContainer = document.getElementById('dynamic-colors');
                if(colorContainer) {
                    const swatches = colorContainer.querySelectorAll('.swatch-btn');
                    swatches.forEach((s, idx) => {
                        if (idx === colorIndex) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                }
                
                const colorNameEl = document.getElementById('color-name');
                if(colorNameEl && product.colors[colorIndex]) {
                    colorNameEl.textContent = product.colors[colorIndex].name;
                }
            }
        });
    }
});

// -- Cart Functions --
async function getCart() {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        const { data, error } = await supabaseClient.from('cart_items').select('*').eq('user_id', user.id);
        if (!error && data) return data;
    }
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

async function saveCart(cart) {
    const user = await getUser();
    if (!user) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    await updateCartCount();
}

async function addToCart(product) {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        // Check if item exists in DB
        const { data: existing } = await supabaseClient.from('cart_items')
            .select('*')
            .eq('user_id', user.id)
            .eq('product_id', product.id)
            .eq('color', product.color)
            .eq('size', product.size)
            .single();

        if (existing) {
            await supabaseClient.from('cart_items').update({ quantity: existing.quantity + (product.quantity || 1) }).eq('id', existing.id);
        } else {
            await supabaseClient.from('cart_items').insert([{
                user_id: user.id,
                product_id: product.id,
                name: product.name,
                price: product.price,
                color: product.color,
                size: product.size,
                quantity: product.quantity || 1,
                image: product.image
            }]);
        }
    } else {
        const cart = await getCart();
        const existingIndex = cart.findIndex(item => item.id === product.id && item.color === product.color && item.size === product.size);
        if (existingIndex > -1) {
            cart[existingIndex].quantity += product.quantity || 1;
        } else {
            cart.push({ ...product, quantity: product.quantity || 1 });
        }
        await saveCart(cart);
    }
    alert('Added to cart!');
    await updateCartCount();
}

async function removeFromCart(index) {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        const cart = await getCart();
        const item = cart[index];
        if(item && item.id) {
            // Note: DB cart_items have an 'id' column from serial. Local items have product.id
            // If item has a unique DB id
            await supabaseClient.from('cart_items').delete().eq('id', item.id);
        }
    } else {
        const cart = await getCart();
        cart.splice(index, 1);
        await saveCart(cart);
    }
    if(typeof renderCart === 'function') await renderCart();
    await updateCartCount();
}

async function updateCartQuantity(index, quantity) {
    if(quantity < 1) return;
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        const cart = await getCart();
        const item = cart[index];
        if(item && item.id) {
            await supabaseClient.from('cart_items').update({ quantity }).eq('id', item.id);
        }
    } else {
        const cart = await getCart();
        cart[index].quantity = quantity;
        await saveCart(cart);
    }
    if(typeof renderCart === 'function') await renderCart();
    await updateCartCount();
}

async function updateCartCount() {
    const countEls = document.querySelectorAll('.cart-count');
    const cart = await getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    countEls.forEach(el => {
        el.textContent = totalItems;
        if(totalItems > 0) {
             el.classList.remove('hidden');
        } else {
             el.classList.add('hidden');
        }
    });
}

async function clearCart() {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        await supabaseClient.from('cart_items').delete().eq('user_id', user.id);
    } else {
        localStorage.removeItem(CART_KEY);
    }
    await updateCartCount();
}

// -- User Functions --
async function getUser() {
    if (!supabaseClient) return JSON.parse(localStorage.getItem(USER_KEY));
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        return { email: session.user.email, id: session.user.id };
    }
    return JSON.parse(localStorage.getItem(USER_KEY));
}

async function signup(email, password) {
    if (!supabaseClient) return;
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
        alert(error.message);
        return null;
    }
    alert('Signup successful! Check your email to confirm your account (if enabled) or try logging in.');
    return data.user;
}

async function login(email, password) {
    if (supabaseClient) {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) {
            alert(error.message);
            return null;
        }
        
        // Sync local cart to DB
        const localCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
        if (localCart.length > 0) {
            for (const item of localCart) {
                await addToCart(item); // Re-add using the authenticated logic
            }
            localStorage.removeItem(CART_KEY);
        }
        
        return { email: data.user.email, id: data.user.id };
    } else {
        const user = { email: email, role: email.includes('admin') ? 'admin' : 'user' };
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        return user;
    }
}

async function logout() {
    if (supabaseClient) {
        await supabaseClient.auth.signOut();
    }
    localStorage.removeItem(USER_KEY);
    window.location.href = 'account.html';
}

// -- Orders Functions --
async function getOrders() {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        const { data, error } = await supabaseClient.from('orders').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
        if (!error && data) return data;
    }
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
}

async function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

async function placeOrder(shippingDetails, paymentDetails) {
    const cart = await getCart();
    if (cart.length === 0) return null;

    const user = await getUser();
    
    // Calculate Total including Discounts
    let subtotal = 0;
    let flatCart = [];
    cart.forEach(item => {
        subtotal += (item.price * item.quantity);
        for(let i=0; i<item.quantity; i++) flatCart.push({ price: item.price });
    });
    
    let eligibleItems = flatCart.filter(item => Number(item.price) === 549);
    let discount = Math.floor(eligibleItems.length / 3) * 549;
    let finalTotal = subtotal - discount;

    const newOrder = {
        id: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        user_email: user ? user.email : shippingDetails.mobile,
        items: cart,
        total: finalTotal,
        status: 'Processing',
        shipping: { ...shippingDetails, payment: paymentDetails }
    };

    if (user && user.id && supabaseClient) {
        newOrder.user_id = user.id;
        const { error } = await supabaseClient.from('orders').insert([newOrder]);
        if (error) {
            alert("Error placing order: " + error.message);
            return null;
        }
    } else {
        const orders = await getOrders();
        orders.push(newOrder);
        await saveOrders(orders);
    }

    await clearCart();
    return newOrder;
}

async function updateOrderStatus(orderId, newStatus) {
    const user = await getUser();
    if (user && user.id && supabaseClient) {
        await supabaseClient.from('orders').update({ status: newStatus }).eq('id', orderId);
    } else {
        const orders = await getOrders();
        const orderIndex = orders.findIndex(o => o.id === orderId);
        if (orderIndex > -1) {
            orders[orderIndex].status = newStatus;
            await saveOrders(orders);
        }
    }
}

// -- Admin Functions --
async function getAllOrders() {
    if (supabaseClient) {
        const { data, error } = await supabaseClient.from('orders').select('*').order('created_at', { ascending: false });
        if (!error && data) return data;
    }
    return [];
}

async function getAllProfiles() {
    if (supabaseClient) {
        const { data, error } = await supabaseClient.from('profiles').select('*').order('created_at', { ascending: false });
        if (!error && data) return data;
    }
    return [];
}

function initMobileMenu() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Remove existing hamburger button if any
    const existingBtn = document.getElementById('mobile-menu-btn');
    if (existingBtn) existingBtn.remove();
    const existingDrawer = document.getElementById('mobile-menu-drawer');
    if (existingDrawer) existingDrawer.remove();

    // 1. Create hamburger button
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.id = 'mobile-menu-btn';
    hamburgerBtn.className = 'md:hidden text-on-surface-variant hover:text-primary focus:outline-none flex items-center justify-center';
    hamburgerBtn.style.cssText = 'color: #e3e2e2; background: none; border: none; cursor: pointer; padding: 0; margin-left: 1rem; outline: none; transition: color 0.3s; z-index: 101;';
    hamburgerBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 28px; font-weight: 300;">menu</span>';

    // Find the actions container (either .nav-actions or .flex.items-center.gap-6 or the last child of nav)
    const actionContainer = nav.querySelector('.nav-actions') || nav.querySelector('.flex.items-center.gap-6') || nav.lastElementChild;
    if (actionContainer) {
        actionContainer.appendChild(hamburgerBtn);
    } else {
        nav.appendChild(hamburgerBtn);
    }

    // 2. Create drawer container
    const drawer = document.createElement('div');
    drawer.id = 'mobile-menu-drawer';
    drawer.style.cssText = 'position: fixed; inset: 0; z-index: 9999; background: rgba(18, 20, 20, 0.98); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem;';
    drawer.innerHTML = `
        <button id="mobile-menu-close-btn" class="text-on-surface-variant hover:text-primary" style="position: absolute; top: 1.5rem; right: 2rem; background: none; border: none; color: #d0c5af; cursor: pointer; outline: none;">
            <span class="material-symbols-outlined" style="font-size: 32px; font-weight: 300;">close</span>
        </button>
        <a href="index.html" class="font-display-lg text-primary tracking-[0.15em] uppercase mb-4" style="font-family: 'Bodoni Moda', serif; color: #f2ca50; text-decoration: none; font-size: 2.5rem; letter-spacing: 0.15em; font-weight: 500;">DYNASTY</a>
        <a href="collections.html" style="font-family: 'DM Sans', sans-serif; color: #e3e2e2; text-decoration: none; font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 400; transition: color 0.3s;" onmouseover="this.style.color='#f2ca50'" onmouseout="this.style.color='#e3e2e2'">Collections</a>
        <a href="index.html#about" style="font-family: 'DM Sans', sans-serif; color: #e3e2e2; text-decoration: none; font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 400; transition: color 0.3s;" onmouseover="this.style.color='#f2ca50'" onmouseout="this.style.color='#e3e2e2'">The Brand</a>
        <a href="index.html#contact" style="font-family: 'DM Sans', sans-serif; color: #e3e2e2; text-decoration: none; font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 400; transition: color 0.3s;" onmouseover="this.style.color='#f2ca50'" onmouseout="this.style.color='#e3e2e2'">Contact</a>
        <a href="account.html" style="font-family: 'DM Sans', sans-serif; color: #e3e2e2; text-decoration: none; font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 400; transition: color 0.3s;" onmouseover="this.style.color='#f2ca50'" onmouseout="this.style.color='#e3e2e2'">My Account</a>
        <a href="cart.html" style="font-family: 'DM Sans', sans-serif; color: #e3e2e2; text-decoration: none; font-size: 1.25rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 400; transition: color 0.3s;" onmouseover="this.style.color='#f2ca50'" onmouseout="this.style.color='#e3e2e2'">Shopping Bag</a>
    `;
    document.body.appendChild(drawer);

    // 3. Event listeners
    window.toggleMobileMenu = function() {
        const isOpen = drawer.style.transform === 'translateX(0%)' || drawer.style.transform === 'translateX(0px)';
        if (isOpen) {
            drawer.style.transform = 'translateX(100%)';
            document.body.style.overflow = '';
        } else {
            drawer.style.transform = 'translateX(0%)';
            document.body.style.overflow = 'hidden';
        }
    };

    hamburgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleMobileMenu();
    });

    drawer.querySelector('#mobile-menu-close-btn').addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleMobileMenu();
    });

    // Close menu when clicking on any link in the drawer
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            drawer.style.transform = 'translateX(100%)';
            document.body.style.overflow = '';
        });
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    updateCartCount();
    if(document.querySelector('.dynamic-title')) {
        loadProductDetails();
    }

    // Collections page wiring
    if(document.querySelector('.product-card')) {
        const buyNowBtns = document.querySelectorAll('.product-card .quick-view button');
        buyNowBtns.forEach(btn => {
            btn.onclick = function(e) {
                e.stopPropagation();
                const card = this.closest('.product-card');
                const id = card.getAttribute('data-product-id');
                window.location.href = 'product.html?id=' + id;
            };
        });

        const sliders = document.querySelectorAll('.slider-container');
        sliders.forEach(slider => {
            slider.style.cursor = 'pointer';
            slider.onclick = function() {
                const card = this.closest('.product-card');
                const id = card.getAttribute('data-product-id');
                window.location.href = 'product.html?id=' + id;
            };
        });
    }
});


