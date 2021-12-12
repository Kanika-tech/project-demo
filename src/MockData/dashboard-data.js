export const dashboard = {
    top_level_props : {
        background: 'black'
    },
    tab_items: [
        {
            title: 'Liquidity Provider',
            tabGroup: true,
            tab_items: [
                {
                    title: 'LPFamilymaster',
                    tabGroup: true,
                    tab_items: [
                        {
                            title: 'View'
                        },
                       {
                            title: 'Add',
                            tabAction: true,
                            
                        },
                       {
                            title: 'Edit Name'
                        },
                        {
                            title: 'Enable/Disable'
                        }
                    ]
                },
               {
                    title: 'LPEntityMaster'
                },
               {
                    title: 'LPUserMaster'
                },
                {
                    title: 'LPSubscriptionMaster'
                },
               {
                    title: 'DPSubscriptionMaster'
                },
                {
                    title: 'LPStrategy'
                }
            ]
        },
       {
            title: 'Liquidity Takers'
        },
       {
            title: 'Relationships'
        },
       {
            title: 'Synoption'
        },
        {
            title: 'Platform'
        },
       {
            title: 'Authorization'
        },
        {
            title: 'Connection Management'
        }
    ]
}