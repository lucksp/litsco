angular.module("app_litsco").factory("factory_litsco", [
  function() {
    var allData = [
      {
        id: "classic_cr",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Classic CR",
        subHeader: "Corrugated, Exposed Fastener, Lap Seam Metal Wall Panel",
        overview:
          "LITSCO's Streamline CR wall panel is an economical solution for exterior or parapet walls in need of restoration.  The narrow rib profile provides a clean, consistent appearance.  The panels can be used in conjunction with Streamline Edge metal systems for a waterproof encapsulation of the structure while still allowing the structure to breath.",
        features: [
          "Standard 8ft or 10ft lengths",
          "Stocked in Baked Enamel Painted Dark Bronze",
          '12"o.c. spacing improves load spans',
          "Can be applied to multiple substrates",
          "Kynar painted standard 20yr finish warranty",
          "Custom painted panels available",
          "Integrates with our LockTight Coping or Flashdown Fascia"
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            'Streamline Omniwall CR panels are intended to be installed directly onto 18GA (1/2") or 20GA (7/8") deep galvanized steel subgirts.  Maximum subgirt spacing is 30".',
          Fasteners:
            '#12 pancake Phillips head, self-drilling stainless steel fastener, painted to match panel.  Fasteners to be installed 12"o.c.',
          Panels:
            "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant."
        },
        materials: {
          Aluminum: ['.040" / .050", Kynar Painted'],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Rheinzink Zinc": ["0.8MM, PrePatina"],
          "Galvanized Steel/Galvalume": ["24GA / 22GA, Kynar Painted"],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B",
            "24GA, Type 304 #2B"
          ]
        },
        colors: {
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Custom Painted": "#FFF"
        },
        illustration: "classic_cr",
        jumboImg: "cr_full.jpg",
        thumbImg: "classic_cr.png",
        detailImg: "streamline_cr_alt.png",
        dataSheetLink: "streamline_classic_cr.pdf",
        quoteSheetLink: "print_approval_streamline.pdf",
        portfolio: [
          {
            url: "classic_cr_0",
            alt: "Streamline Classic CR metal panel",
            projectName: "Eastchester Houses",
            projectDetails: '.032" Baked Enamel Bronze'
          },
          {
            url: "classic_cr_1",
            alt: "Streamline Classic CR metal panel",
            projectName: "Eastchester Houses",
            projectDetails: '.032" Baked Enamel Bronze'
          },
          {
            url: "classic_cr_2",
            alt: "Streamline Classic CR metal panel",
            projectName: "Gates Houses",
            projectDetails: '.040" Dark Ivy'
          },
          {
            url: "classic_cr_4",
            alt: "Streamline Classic CR metal panel",
            projectName: "Pershing Crescent",
            projectDetails: '.032" Baked Enamel Bronze'
          },
          {
            url: "classic_cr_5",
            alt: "Streamline Classic CR metal panel",
            projectName: "Eastchester Houses",
            projectDetails: '.032" Baked Enamel Bronze'
          },
          {
            url: "classic_cr_6",
            alt: "Streamline Classic CR metal panel",
            projectName: "The Arrivals' Pop-Up Store",
            projectDetails: '.032" Mill Finish Aluminum'
          }
        ]
      },
      {
        id: "omniwall_md",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Omniwall MD",
        subHeader:
          "Multi-Directional, Concealed Fastener, Lap Seam Metal Wall Panel.  ASTM E-330",
        overview:
          "LITSCO's Streamline OmniWall MD panel is an ideal solution for exterior walls or soffits in need of restoration.  The stackable panel modules install quickly and hides the fasteners, resulting in a clean, consistent appearance. This panel is unique in that it is omni directional, allowing it to be installed side-by-side and bottom-to-top, in vertical or horizontal panel orientation.",
        features: [
          "Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
          "ASTM E330 tested for structural integrity",
          "Heavier gauge materials result in a stronger panel",
          "Standard panels sizes in both small and large modules",
          "Kynar painted standard 20yr finish warranty",
          "Custom painted panels available",
          "Can be rear insulated."
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            'Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2") or 20GA (7/8") deep galvanized steel subgirts.  Maximum subgirt spacing is 30".',
          Fasteners:
            '#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12"o.c.',
          Panels:
            "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant."
        },
        materials: {
          Aluminum: ['.040" / .050", Kynar Painted'],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Rheinzink Zinc": ["0.8MM, PrePatina"],
          "Galvanized Steel/Galvalume": ["24GA / 22GA, Kynar Painted"],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B",
            "24GA, Type 304 #2B"
          ]
        },
        colors: {
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Custom Painted": "#FFF"
        },
        illustration: "omniwall_md",
        jumboImg: "md_full.jpg",
        detailImg: "streamline_omniwall_md_alt.png",
        thumbImg: "omniwall_md.png",
        dataSheetLink: "streamline_omniwall_md.pdf",
        specPageLink: "/docs/section-074113-streamline-omniwall-md.docx",
        quoteSheetLink: "print_approval_omniwall_md.pdf",
        portfolio: [
          {
            url: "omniwall_md_0",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "West 60th St",
            projectDetails: '.040" Kynar Teal'
          },
          {
            url: "omniwall_md_1",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "West 60th St",
            projectDetails: '.040" Kynar Teal'
          },
          {
            url: "omniwall_md_2",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "West 60th St",
            projectDetails: '.040" Kynar Teal'
          },
          {
            url: "omniwall_md_3",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "Bronx Lighthouse Charter School",
            projectDetails: '.040" Kynar Silver Metallic'
          },
          {
            url: "omniwall_md_4",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "Bronx Lighthouse Charter School",
            projectDetails: '.040" Kynar Silver Metallic'
          },
          {
            url: "omniwall_md_5",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "Lafayette St",
            projectDetails: '.040" Kynar Sandstone'
          },
          {
            url: "omniwall_md_6",
            alt: "Streamline Omniwall MD metal panel",
            projectName: "Lafayette St",
            projectDetails: '.040" Kynar Sandstone'
          }
        ]
      },
      {
        id: "omniwall_cl",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Omniwall CL",
        subHeader:
          "Clip & Concealed Fastener, Heavy Duty Rainscreen Panel. ASTM E330, 331 & ASTM 283",
        overview:
          "LITSCO's Streamline OmniWall CL panel is heavy duty clip mounted panel to offer a cost effective alternate to plate & ACM rainscreen systems.  The pre-installed clips create fast installation to substrate.",
        features: [
          "Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
          "Economical alternate for ACM/Plate",
          "ASTM E330, E331 tested for structural integrity",
          "ASTM E283 tested for water infiltration resistance",
          "Heavier gauge materials result in a stronger panel",
          "Standard panels sizes in both small and large modules",
          "Kynar painted standard 20yr finish warranty",
          "Custom painted panels available",
          "Can be rear insulated"
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            'Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2") or 20GA (7/8") deep galvanized steel subgirts.  Maximum subgirt spacing is 30".',
          Fasteners:
            "#12 hex head, self-drilling stainless steel fastener with neoprene washer.",
          Panels:
            'Set panel direct to subgirt,  set joint to 5/8" wide, set backer rod and caulk joint with high performance Pecora silicone sealant.'
        },
        materials: {
          Aluminum: [
            '.063" / .080", Kynar Painted',
            '.090", Custom Kynar Painted'
          ]
        },
        colors: {
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          "Matte Black": "#232021",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Custom Painted": "#FFF"
        },
        illustration: "omniwall_cl",
        jumboImg: "cl_full.jpg",
        detailImg: "streamline_omniwall_cl_alt.png",
        thumbImg: "omniwall_cl.png",
        dataSheetLink: "streamline_omniwall_cl.pdf",
        specPageLink: "/docs/section-074113-streamline-omniwall-cl.docx",
        quoteSheetLink: "print_approval_omniwall_cl.pdf",
        portfolio: [
          {
            url: "omniwall_cl_0",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Grand @ Sky View Parc",
            projectDetails: '.080" Kynar Charcoal'
          },
          {
            url: "omniwall_cl_1",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Grand @ Sky View Parc",
            projectDetails: '.080" Kynar Charcoal'
          },
          {
            url: "omniwall_cl_2",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Kutztown University",
            projectDetails: '.063" Kynar Bone White'
          },
          {
            url: "omniwall_cl_3",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Kutztown University",
            projectDetails: '.063" Kynar Bone White'
          },
          {
            url: "omniwall_cl_4",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Fieldstone Ave",
            projectDetails:
              'CL Fusion Rainscreen System: .063" Kynar Dark Bronze'
          },
          {
            url: "omniwall_cl_5",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Livonia Ave, Brooklyn, NY",
            projectDetails: '.063" Kynar Silver Metallic'
          },
          {
            url: "omniwall_cl_6",
            alt: "Streamline Omniwall CL metal panel",
            projectName: "Livonia Ave, Brooklyn, NY",
            projectDetails: '.063" Kynar Silver Metallic'
          }
        ]
      },
      {
        id: "flushwall_tg",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Flushwall TG",
        subHeader: "Concealed Fastener, Lap Seam Metal Panel.  Flush or reveal",
        overview:
          "LITSCO's Streamline Flush TG panel is an ideal solution for exterior, parapet walls or soffits in need of restoration.  The interlocking Tongue-n-Groove installation is fast and hides the fasteners making the 11\" wide profile a clean, consistent appearance.",
        features: [
          "Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
          'Horizontal panel allows for reveal option, standard 1"',
          "Vertical panel allows for easy installation side-by-side",
          "Standard 8ft or 10ft lengths",
          "Economical Baked Enamel Paint option",
          "Kynar painted standard 20yr finish warranty"
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            'Streamline Flushwall TG panels are intended to be installed directly onto 18GA (1/2") or 20GA (7/8") deep galvanized steel subgirts.  Maximum subgirt spacing is 30".',
          Fasteners:
            '#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12"o.c.',
          Panels:
            "For horizontal installation, start from bottom and work upward.  If open ends, ensure proper side flashings are installed.  For vertical applications, start from one side, and work across.  With closed ends, panels to be stacked as designed (with or without reveal) and apply silicone sealant."
        },
        materials: {
          Aluminum: ['.040" / .050", Kynar Painted'],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Rheinzink Zinc": ["0.8MM, PrePatina"],
          "Galvanized Steel/Galvalume": ["24GA / 22GA, Kynar Painted"],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B",
            "24GA, Type 304 #2B"
          ]
        },
        colors: {
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Custom Painted": "#FFF"
        },
        illustration: "flushwall_tg",
        jumboImg: "tg_full.jpg",
        detailImg: "streamline_flush_tg_alt.png",
        thumbImg: "flushwall_tg.png",
        dataSheetLink: "streamline_flush_tg.pdf",
        portfolio: [
          {
            url: "flushwall_tg_0",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_1",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_2",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_3",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_4",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Manhasset Public Library",
            projectDetails: '0.18" Follansbee Terne Coated Stainless Steel'
          },
          {
            url: "flushwall_tg_5",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Austrian Cultrual Forum",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_6",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Austrian Cultrual Forum",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flushwall_tg_7",
            alt: "Streamline Flushwall TG metal panel",
            projectName: "Pier 17",
            projectDetails: "1.0m Rheinzink Pre-Patina Zinc"
          }
        ]
      },
      {
        id: "flatwall_sm",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Flatwall SM",
        subHeader:
          "Flat Seam, Concealed Fastener, Overlapping Metal Panel.  ASTM E-330",
        overview:
          "LITSCO's Streamline FlatWall SM panel is an overlapping metal panel which is installed to provide a shingle effect which is also an excellent design for shedding water.  Due to it's compatibility with almost any jobsite condition, and the many standard sizes, this makes an excellent panel for design purposes.",
        features: [
          "Integrated clip provides solid fastening to a variety of substrates",
          "ASTM E-330 tested for structural integrity",
          "Square, Rectangle, or Diamond shape allows for wide variety of designs and applications",
          "Ideal for wall and low-slope roofing projects",
          "Natural metals patina over time providing a unique finish for each project",
          "Kynar painted standard 20yr finish warranty"
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            "FlatWall SM panels can be installed directly to a variety of substrates, however, custom cleats may be required to provide adequate pull out resistance.",
          Fasteners:
            "#12 pancake self-drilling stainless steel for metal substrate.",
          Panels:
            "Start from corner location and install sideways first, then work upward.  For roofing applications, additional soldering may be required."
        },
        materials: {
          Aluminum: ['.032" / .040", Kynar Painted'],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Rheinzink Zinc": ["0.8MM, PrePatina", "1.0MM, PrePatina"],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B",
            "24GA, Type 304 #2B"
          ]
        },
        colors: {
          Copper: "#af6818",
          "Pre Patina Zinc": "#646566",
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Pre-Patina Green": "#599671",
          "Custom Painted": "#FFF"
        },
        illustration: "flatwall_sm",
        jumboImg: "sm_full.jpg",
        detailImg: "streamline_flatwall_sm_alt.png",
        thumbImg: "flatwall_sm.png",
        quoteSheetLink: "print_approval_flatwallsm.pdf",
        dataSheetLink: "streamline_flatwall_sm.pdf",
        specPageLink: "/docs/section-074113-streamline-flatwall-sm.docx",
        portfolio: [
          {
            url: "flatwall_sm_0",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CAMBA Gardens",
            projectDetails: "16oz Aurubis Nordic Green Copper"
          },
          {
            url: "flatwall_sm_1",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CAMBA Gardens",
            projectDetails: "16oz Aurubis Nordic Green Copper"
          },
          {
            url: "flatwall_sm_2",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CAMBA Gardens",
            projectDetails: "16oz Aurubis Nordic Green Copper"
          },
          {
            url: "flatwall_sm_3",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CUNY CEWIT",
            projectDetails: "16oz Revere Copper"
          },
          {
            url: "flatwall_sm_4",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CUNY CEWIT",
            projectDetails: "16oz Revere Copper"
          },
          {
            url: "flatwall_sm_5",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "CUNY CEWIT",
            projectDetails: "16oz Revere Copper"
          },
          {
            url: "flatwall_sm_6",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "United Nations",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flatwall_sm_7",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "United Nations",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "flatwall_sm_8",
            alt: "Streamline Flatwall SM metal panel",
            projectName: "Pier 17",
            projectDetails: "1.0m Rheinzink Pre-Patina Zinc"
          }
        ]
      },
      {
        id: "standing_sm",
        cat: 1,
        productName: "Streamline<sup class='registered'>®</sup> Standing Seam",
        subHeader: "Concealed Fastener, Vertical / Standing Seam Metal Panel",
        overview:
          "LITSCO's Standing Seam panel is an ideal solution for both vertical & low slope roof applications.  The standard 1\" high seam blends architectural design with superior craftsmanship.  This is a non-structural panel with a double lock seam which still provides superior weathertighness on greater than 2:12 slopes.",
        features: [
          "Standard 8ft or 10ft lengths",
          'The 1" high seam conceals both the one-piece clip and fastener.',
          "Can be installed on roofs or walls",
          "Kynar painted standard 20yr finish warranty",
          "Widths available to optimize pricing based on material selection"
        ],
        installation: {
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.',
          Substrate:
            "Standing SM panels can be installed over both metal framing & solid substrate.",
          Fasteners: "#12 pancake Phillips head, choice of wood or metal tip.",
          Panels:
            'Set panel from bottom/eave location and install clips as recommended.  Minimum 24" o.c.  The double lock seam is mechanically closed after panels are installed.  Optional in-seam sealant available for ultimate in watertightness.'
        },
        materials: {
          Aluminum: ['.032" / .040", Kynar Painted'],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Rheinzink Zinc": ["0.8MM, PrePatina", "1.0MM, PrePatina"],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B",
            "24GA, Type 304 #2B"
          ]
        },
        colors: {
          Copper: "#af6818",
          "Pre Patina Zinc": "#646566",
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Custom Painted": "#FFF"
        },
        illustration: "standing_sm",
        jumboImg: "stand_full.jpg",
        detailImg: "standingseam_alt.png",
        thumbImg: "standing_sm.png",
        quoteSheetLink: "print_approval_standingsm.pdf",
        dataSheetLink: "streamline_standing_sm.pdf",
        portfolio: [
          {
            url: "standing_sm_0",
            alt: "Streamline Standing SM metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "standing_sm_1",
            alt: "Streamline Standing SM metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "standing_sm_2",
            alt: "Streamline Standing SM metal panel",
            projectName: "Laight Street",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          },
          {
            url: "standing_sm_3",
            alt: "Streamline Standing SM metal panel",
            projectName: "Marrymount",
            projectDetails: "16oz Aurubis Nordic Brown Copper"
          },
          {
            url: "standing_sm_4",
            alt: "Streamline Standing SM metal panel",
            projectName: "Manhasset Public Library",
            projectDetails: '0.18" Follansbee Terne Coated Stainless Steel'
          },
          {
            url: "standing_sm_5",
            alt: "Streamline Standing SM metal panel",
            projectName: "Manhasset Public Library",
            projectDetails: '0.18" Follansbee Terne Coated Stainless Steel'
          },
          {
            url: "standing_sm_6",
            alt: "Streamline Standing SM metal panel",
            projectName: "Private Residence",
            projectDetails: "0.8m Rheinzink Pre-Patina Zinc"
          }
        ]
      },
      {
        id: "locktight_coping",
        cat: 2,
        productName: "LockTight Coping",
        subHeader:
          "Concealed Fastener Snap-On Coping System.  ANSI/SPRI/FM 4435/ES-1 Certified",
        overview:
          'LITSCO\'s LockTight coping system is a snap-on metal system with anchor plates and a spring clip.  It provides faster installation times than traditional "continuous cleat" copings due to the anchor plate providing consistent substrate as opposed to measuring with a cleat. LockTight coping is an ideal solution to weatherproof any of the Streamline wall panel systems.  <br>LockTight coping is ANSI/SPRI/FM 4435/ES-1 Certified.',
        features: [
          "Standard 10ft lengths",
          'Standard exterior leg 4.5" length, Standard interior leg 4" length.',
          "Easy snap-on installation with all concealed fastening",
          "Coping covers are manufactured for positive drainage",
          "Aluminum / Galvanized Steel anchor plates can accommodate inconsistencies in wall width",
          "Kynar painted standard 20yr finish warranty",
          "Face extenders, custom miters and profiles available."
        ],
        installation: {
          "Anchor Plates":
            "Typical system requires two 18GA anchor plates for each length of coping.  Additional pieces may be required to achieve higher wind ratings or for special jobsite conditions.",
          "Splice Plates":
            "Typical system requires 1 splice plate for each length of coping.  Set beads of silicone on each side to create a waterdam.",
          "Coping Cover":
            "Once Anchor Plates and Splice Plates have been set, set cover and press down at anchor plate locations to engage legs.",
          Fasteners:
            "Appropriate fasteners for substrate.  Fasteners to be installed as indicated with pre-punched locations.",
          Miters:
            'Standard corner units pre-fabricated with a "Cut-n-Tab" miter.  Caulk and rivet in field.  Welded covers available upon request.',
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.'
        },
        materials: {
          Aluminum: [
            '.040", .050", .063", Baked Enamel',
            '.040", .050", .063", Kynar Painted'
          ],
          "Galvanized Steel": ["24GA, 22GA, Kynar Painted"]
        },
        colors: {
          "Pre Patina Zinc": "#646566",
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          "Custom Painted": "#FFF"
        },
        illustration: "locktight",
        jumboImg: "lt_full.jpg",
        detailImg: "locktite_alt.png",
        thumbImg: "locktight.png",
        quoteSheetLink: "print_approval_locktight.pdf",
        dataSheetLink: "locktight_coping.pdf",
        specPageLink: "/docs/section-077100-streamline-locktight-coping.docx",
        installVideo: "uvqErM1BzQw",
        portfolio: [
          {
            url: "locktight_0",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_1",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_2",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_3",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_4",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_5",
            alt: "Locktight Coping by LITSCO",
            projectName: "Bronx Riverside Houses",
            projectDetails: '0.40" Kynar Silver Metallic'
          },
          {
            url: "locktight_6",
            alt: "Locktight Coping by LITSCO",
            projectName: "Kutztown University",
            projectDetails: '.063" Kynar Bone White'
          }
        ]
      },
      {
        id: "flashdown_fascia",
        cat: 2,
        productName: "Flashdown Fascia",
        subHeader:
          "Non-Penetrating, Concealed Fastener, Snap-On Fascia System.  ANSI/SPRI/FM 4435/ES-1 Certified",
        overview:
          'LITSCO\'s Flashdown Fascia system is a snap-on edge metal system with spring cleat.  It provides faster installation times than traditional "continuous cleat" gravel stops.  Due to its non-penetrating design, this system is compatible with all roof systems: EPDM, TPO, PVC, SBS, and liquid membranes. <br>Flashdown Fascia is ANSI/SPRI/FM 4435/ES-1 Certified.',
        features: [
          "Standard 10ft lengths",
          'Standard Face Sizes: 4-3/4", 6-3/4", or 9"',
          "Easy snap-on installation with all concealed fastening",
          "Face-only fastening ties down roof system edge without stripping in flashing",
          "Stainless steel anchor cleat can be installed first to stage roof construction",
          "Kynar painted standard 20yr finish warranty",
          "Face extenders, custom miters and profiles available."
        ],
        installation: {
          "Anchor Cleat":
            "Typical system requires 1 piece per length of cover.",
          "Fascia Cover":
            "Snap on cover, install 1 splice plate per length of cover.",
          Fasteners:
            "Appropriate fasteners for substrate.  Fasteners to be installed as indicated with pre-punched locations.",
          Miters:
            "Standard folded corner unit miter.  Caulk and rivet in field.  Welded covers available upon request.",
          Trim:
            'All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032" - .040" aluminum or 24ga steel.'
        },
        materials: {
          Aluminum: [
            '.040", .050", Baked Enamel',
            '.040", .050", Kynar Painted'
          ],
          "Galvanized Steel": ["24GA, 22GA, Kynar Painted"]
        },
        colors: {
          "Pre Patina Zinc": "#646566",
          Almond: "#e0d6b3",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          Sandstone: "#c6b999",
          "Silver Metallic": "#66727a",
          "Slate Gray": "#2f2e2c",
          "Matte Black": "#232021",
          Copper: "#af6818",
          "Custom Painted": "#FFF"
        },
        illustration: "flashdown",
        jumboImg: "flashdown_full.jpg",
        thumbImg: "flashdown.png",
        detailImg: "flashdown_alt.png",
        quoteSheetLink: "print_approval_flashdown.pdf",
        dataSheetLink: "flashdown_fascia.pdf",
        specPageLink: "/docs/section-077120-streamline-flashdown-fascia2.docx",
        installVideo: "1GMUaw2bUZ0",
        portfolio: [
          {
            url: "flashdown_0",
            alt: "Flashdown Fascia by LITSCO",
            projectName: "Public Houses",
            projectDetails: '.040" Kynar Dark Bronze'
          },
          {
            url: "flashdown_1",
            alt: "Flashdown Fascia by LITSCO",
            projectName: "Public Houses",
            projectDetails: '.040" Kynar Dark Bronze'
          },
          {
            url: "flashdown_2",
            alt: "Flashdown Fascia by LITSCO",
            projectName: "Public Houses",
            projectDetails: '.040" Kynar Dark Bronze'
          },
          {
            url: "flashdown_3",
            alt: "Flashdown Fascia by LITSCO",
            projectName: "Public Houses",
            projectDetails: '.040" Kynar Dark Bronze'
          }
        ]
      },
      {
        id: "mortartight_thruwall",
        cat: 2,
        productName: "Mortartight Thruwall",
        subHeader: "3-Way Keyed/Sawtooth, Masonry Thru-Wall and Cap Flashing",
        overview:
          "LITSCO'S  Mortartight is a metal counterflashing with optional 2-piece receiver and base flashing insert.  This style is very useful when masonry wall construction and roof installation occur at different times.  Saw-tooth patterned metal with interlocking side laps cuts off moisture that can seep into masonry construction.  For smooth thru-wall receiver, please visit our Lit-Lok page.",
        features: [
          "Provides 3-way mechanical bond in all directions in the mortar setting bed and weep-hole drainage.",
          "Commonly found under coping stones, thru-wall flashing in masonry walls and elsewhere.",
          "Notched insert and receiver allows for smooth sidelap between pieces",
          'Caps are machine fabricated in 54" lengths',
          'Longer 8\'-0" (96") lengths for the optional insert',
          "Automated manufacturing increases productivity"
        ],
        installation: {
          MortarTight:
            "Set in masonry mortar.  If 2 piece design, see insert below.",
          "Side Laps": "3” as 2-piece receiver or 1.5” for typical profile.",
          Insert:
            "Offset joints from receiver, insert to maximum depth as metal allows.",
          Miters: "Standard corner units are pre-fabricated welded units."
        },
        materials: {
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B"
          ]
        },
        colors: {
          Copper: "#af6818",
          "Freedom Gray": "#646566",
          "Lead Coated": "#66727a",
          "Stainless Steel": "#c5c4c4"
        },
        illustration: "mortartight",
        jumboImg: "mt_full.jpg",
        detailImg: "mortar_tight_alt.png",
        thumbImg: "mortartight.png",
        quoteSheetLink: "print_approval_mortartight.pdf",
        dataSheetLink: "mortartight_flashing.pdf",
        portfolio: [
          {
            url: "mortartight_0",
            alt: "Mortartight Through Wall Flashing",
            projectName: "Public Houses",
            projectDetails: "26GA Stainless Steel / Welded mitre"
          },
          {
            url: "mortartight_1",
            alt: "Mortartight Through Wall Flashing",
            projectName: "Public School",
            projectDetails:
              "26GA Type 316 Stainless Steel receiver (insert not shown)"
          },
          {
            url: "mortartight_2",
            alt: "Mortartight Through Wall Flashing",
            projectName: "Public School",
            projectDetails:
              "26GA Type 316 Stainless Steel receiver (insert not shown)"
          }
        ]
      },
      {
        id: "2-piece_litlok",
        cat: 2,
        productName: "Lit-Lok Flashing",
        subHeader: "2 Piece, Smooth, Thru-Wall Masonry Flashing",
        overview:
          "LITSCO'S  LIT-LOK is a Metal counterflashing with separate masonry flashing receiver and base flashing insert.  This style is very useful when masonry wall construction and roof installation occur at different times.  For 3 way keyed/sawtooth mortar receiver, please visit our MortarTight page.",
        features: [
          "Insert locks in without additional fasteners installed after roof flashing to allow proper construction staging.",
          "Notched insert and receiver allows for smooth sidelap between pieces.",
          "Button punched insert locks in to receiver for strong bond.",
          "Insert can be removed for roof base flashing maintenance or repair.",
          'Standard 8\'-0" (96") lengths for the optional insert',
          "Receiver available in standard profiles: Thru-wall, Surface Mount, Panel Closure, Under-coping types."
        ],
        installation: {
          Receiver: "Set in masonry mortar.",
          Insert:
            "Offset joints from receiver, insert to maximum depth as metal allows.",
          Miters: "Standard corner units are pre-fabricated welded units."
        },
        materials: {
          Aluminum: [
            '.032" / .040", Mill Finish',
            '.032" / .040", Kynar Painted'
          ],
          Copper: [
            "16oz / 20oz, Cold Rolled",
            "16oz / 20oz, Lead Coated",
            "16oz / 20oz, Freedom Gray"
          ],
          "Stainless Steel": [
            '.018" (26GA), Type 304 #2D',
            "26GA, Type 316 #2B"
          ]
        },
        colors: {
          Copper: "#af6818",
          "Freedom Gray": "#646566",
          "Lead Coated": "#66727a",
          "Stainless Steel": "#c5c4c4"
        },
        illustration: "litlok",
        jumboImg: "litlok_full.jpg",
        detailImg: "litlok_alt.png",
        thumbImg: "litlok.png",
        quoteSheetLink: "print_approval_litlok.pdf",
        dataSheetLink: "litlok_flashing.pdf",
        portfolio: [
          {
            url: "litlok_0",
            alt: "LitLok ThruWall Flashing by LITSCO",
            projectName: "NYC Public School",
            projectDetails: "26GA Type 316 Stainless Steel"
          },
          {
            url: "litlok_1",
            alt: "LitLok ThruWall Flashing by LITSCO",
            projectName: "NYC Public School",
            projectDetails: "26GA Type 316 Stainless Steel"
          }
        ]
      },
      {
        id: "lead_tees",
        cat: 2,
        productName: "Lead Tees",
        subHeader: "Extruded Joint Closure for Coping Stones",
        overview:
          "Closes joints between parapet cap stones permanently and maintains old-world landmark or any coping stone replacement projects.  The Lead Tee can be used in all coping stone joints.",
        features: [
          'Available in two sizes: 1-1/2" & 7/8" wide profiles.',
          '6\'-0" (72") lengths.'
        ],
        installation: {
          Sealant:
            "Ensure clean joint, then set in high performance Silicone sealant.",
          "Lead Tee":
            "Wrap around coping stone, cut to required length in field."
        },
        materials: {
          Lead: [
            "High purity grade lead meets Federal Specification QQ-L-171 grade B"
          ]
        },
        colors: {
          Standard: "#c5c4c4"
        },
        illustration: "lead_tee",
        jumboImg: "tee_full.jpg",
        detailImg: "lead_tee.png",
        thumbImg: "lead_tee.png",
        dataSheetLink: "joint_lead_tee.pdf"
      },
      {
        id: "gard_n_edge",
        cat: 2,
        productName: "Gard-N-Edge",
        subHeader: "Green Roof and Plaza Edge Restraints",
        overview:
          "Gard-N-Edge is the ideal solution for garden roof projects where transition and soil retention is needed between the vegetation and hardscapes such as conventional roofing systems or plaza pavers.",
        features: [
          "Fabricated in 10ft lengths",
          "Integrated Splice Plate means No additional pieces, Improves installation times",
          "Cut-Tab Corners allow for minor adjustments at corners. Just set and rivet to keep in place",
          "Custom miters and profiles available",
          "Drainage Outlets 3/8” wide x 1” high, spaced 1” O.C. to provide maximum drainage beneath the vegetative roof system",
          "Height of slots accounts for the thickness of most drainage mats."
        ],
        installation: {
          "Edge Restraint":
            "Edge restraint is loosely laid on top of roofing system as specified and held in place by the weight of the growing media placed over it. Do not mechanically attach through roof system."
        },
        materials: {
          Aluminum: [
            '.063" / .080" / .125", Mill Finish',
            '.063" / .080" / .125", Custom Painted',
            '.063" Standard Kynar Painted'
          ],
          Copper: ["16oz / 20oz, Cold Rolled", "16oz / 20oz, Freedom Gray"],
          "Stainless Steel": ["22GA / 20GA Type 304 #2D"],
          "Rheinzink Zinc": ["1.0MM, PrePatina"]
        },
        colors: {
          Copper: "#af6818",
          "Freedom Gray": "#646566",
          "Lead Coated": "#66727a",
          "Stainless Steel": "#c5c4c4",
          "Pre Patina Zinc": "#646566",
          "Bone White": "#f4f4f4",
          "Dark Bronze": "#211401",
          "Matte Black": "#232021"
        },
        illustration: "gard_n_edge",
        jumboImg: "gardnedge_full.jpg",
        thumbImg: "gardnedge.png",
        dataSheetLink: "gard_n_edge.pdf",
        quoteSheetLink: "print_approval_gard_n_edge.pdf",
        portfolio: [
          {
            url: "gardnedge_0",
            alt: "Gard-n-Edge by LITSCO",
            projectName: "NYC Rooftop",
            projectDetails: '0.050" Mill Finish Aluminum'
          },
          {
            url: "gardnedge_1",
            alt: "Gard-n-Edge by LITSCO",
            projectName: "NYC Rooftop",
            projectDetails: '0.050" Mill Finish Aluminum'
          },
          {
            url: "gardnedge_2",
            alt: "Gard-n-Edge by LITSCO",
            projectName: "NYC Rooftop",
            projectDetails: '0.050" Mill Finish Aluminum'
          }
        ]
      },
      {
        id: "specialty_metal",
        cat: 2,
        productName: "Specialty Metal",
        subHeader: "Custom sheet metal fabrication solutions",
        overview:
          "Our sheetmetal shop also handles custom metal fabrications to meet a wide range of applications.  From cornices to louvers, to shells & crests, to Custom Fascia Wraps, to chimney covers, LITSCO's on-site sheet metal shop can handle your project with confidence.",
        jumboImg: "special_full.jpg",
        thumbImg: "specialty.jpg",
        features: [
          "Corninces",
          "Louvers",
          "Chimney Covers",
          "Fascia Wraps",
          "Gutters",
          "Leaders",
          "Pier Covers",
          "Skylights",
          "Finials"
        ],
        portfolio: [
          {
            url: "custom_0",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_1",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_2",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_3",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_4",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_5",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_6",
            alt: "LITSCO's custom specialty sheet metal"
          },
          {
            url: "custom_7",
            alt: "LITSCO's custom specialty sheet metal"
          }
        ]
      },

      {
        id: "roofing",
        cat: 3,
        vendorName: "Johns Manville",
        vendorLogo: "jm.png",
        vendorUrl: "http://specjm.com/",
        subHeader:
          "Manufactures commercial insulation and commercial roofing systems",
        alt: "Johns Manville Roofing"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Firestone",
        vendorLogo: "firestone.png",
        vendorUrl: "http://firestonebpco.com/",
        subHeader:
          "Manufactures commercial insulation and commercial roofing systems",
        alt: "Firestone Building Products"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Soprema",
        vendorLogo: "soprema.png",
        vendorUrl: "http://soprema.us/",
        subHeader:
          "Innovative commercial roofing systems for the building envelope",
        alt: "Soprema Building Envelope"
      },
      {
        id: "roofing",
        cat: 6,
        vendorName: "Soprema",
        vendorLogo: "soprema.png",
        vendorUrl: "http://soprema.us/",
        subHeader: "Innovative air vapor barriers building envelope",
        alt: "Soprema Building Envelope"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Georgia Pacific",
        vendorLogo: "gp_dens.png",
        vendorUrl: "http://www.buildgp.com/densdeck-roof-board-products",
        subHeader: "Gypsum Products for roofing applications",
        alt: "Georgia Pacific Dens Deck"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "USG Securock",
        vendorLogo: "securock.png",
        vendorUrl:
          "https://www.usg.com/content/usgcom/en/products-solutions/products/roofing/roof-boards/usg-securock-gypsum-fiber-roof-board.html",
        subHeader:
          "Gypsum fiber board for use in low-slope commercial roofing systems",
        alt: "USG Securock Brand Gypsum Fiber Roof Board"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "Georgia Pacific",
        vendorLogo: "gp_dens.png",
        vendorUrl: "http://www.buildgp.com/densdeck-roof-board-products",
        subHeader: "Gypsum Products for vertical exterior wall applications",
        alt: "Georgia Pacific Dens Glass"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Hunter Insulation",
        vendorLogo: "hunter.png",
        vendorUrl: "https://www.hunterpanels.com/",
        subHeader: "High quality and value added roofing insulation",
        alt: "Hunter Insulation"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "OMG Olympic",
        vendorLogo: "omg.png",
        vendorUrl: "https://www.omgroofing.com/",
        subHeader:
          "North America’s first choice of commercial roof fastening products",
        alt: "OMG fasteners"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "Hunter XCI",
        vendorLogo: "hunter_xci.png",
        vendorUrl: "https://www.hunterpanels.com/",
        subHeader:
          "High quality insulation for vertical and below grade applications",
        alt: "Hunter XCI"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Laureco Waterproofing",
        vendorLogo: "laurenco.png",
        vendorUrl: "http://laurencowaterproofing.com/",
        subHeader: "The original monolithic waterproofing system",
        alt: "Laurenco Waterproofing"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Carlisle CCW",
        vendorLogo: "ccw.png",
        vendorUrl: "http://www.carlisleccw.com/",
        subHeader: "Ideal systems for protected roof membranes",
        alt: "Carlisle Coatings and Waterproofing"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Carlisle CCW",
        vendorLogo: "ccw.png",
        vendorUrl: "http://www.carlisleccw.com/",
        subHeader: "Waterpoofing and Coatings for wide range of applications",
        alt: "Carlisle Coatings and Waterproofing"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "Carlisle CCW",
        vendorLogo: "ccw.png",
        vendorUrl: "http://www.carlisleccw.com/",
        subHeader:
          "Air Vapor barriers and wateproofings for the vertical building envelope",
        alt: "Carlisle Coatings and Waterproofing"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "OC Foamular",
        vendorLogo: "oc.png",
        vendorUrl: "https://www.owenscorning.com/insulation/commercial",
        subHeader:
          "Extruded polystyrene (XPS) rigid foam board insulation for a variety of applications",
        alt: "Owens Corning Foamular XPS insulation"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "Pecora",
        vendorLogo: "pecora.png",
        vendorUrl: "http://www.pecora.com/",
        subHeader:
          "Pecora offers high quality silicone sealants, urethane sealants and more for all components of a building ",
        alt: "Pecora sealants"
      },
      {
        id: "envelope",
        cat: 6,
        vendorName: "Insulfoam",
        vendorLogo: "insulfoam.png",
        vendorUrl: "http://insulfoam.com/",
        subHeader:
          "Expanded polystyrene (EPS) rigid foam board insulation for a variety of applications",
        alt: "Insulfoam EPS insulation"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Laureco Waterproofing",
        vendorLogo: "laurenco.png",
        vendorUrl: "http://laurencowaterproofing.com/",
        subHeader: "The original monolithic waterproofing system",
        alt: "Laurenco Waterproofing"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Willseal",
        vendorLogo: "willseal.png",
        vendorUrl: "https://willseal.com",
        subHeader: "Pre-compressed, state-of-the-art expansion joints",
        alt: "WillSeal expansion joints"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Soprema",
        vendorLogo: "soprema.png",
        vendorUrl: "http://soprema.us/",
        subHeader: "Innovative commercial systems for the building envelope",
        alt: "Soprema Building Envelope"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Prosoco",
        vendorLogo: "prosoco.png",
        vendorUrl: "https://www.prosoco.com/",
        subHeader: "Innovative commercial systems for the building envelope",
        alt: "Soprema Building Envelope"
      },
      {
        id: "roofing",
        cat: 3,
        vendorName: "Karnak",
        vendorLogo: "karnak.png",
        vendorUrl: "http://karnakcorp.com",
        subHeader: "Roofing products, Reflective Coatings, Roofing Cements",
        alt: "Karnak Corp sealants"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Hanover",
        vendorLogo: "hanover.png",
        vendorUrl: "https://www.hanoverpavers.com/",
        subHeader:
          "Hanover has been providing quality concrete unit paving products since 1971",
        alt: "Hanover roof pavers"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Babcock Davis",
        vendorLogo: "babcock.png",
        vendorUrl: "https://www.babcockdavis.com/",
        subHeader:
          "The industry's largest selection of commercial grade Access Doors and Panels",
        alt: "Babcock Davis hatches"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Bilco",
        vendorLogo: "bilco.png",
        vendorUrl: "http://www.bilco.com/",
        subHeader:
          "Bilco's products, including Roof Hatches and Smoke Vents, provide many years of trouble-free service",
        alt: "Bilco hatches and vents"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "BASF",
        vendorLogo: "basf.png",
        vendorUrl: "https://www.master-builders-solutions.basf.us/en-us",
        subHeader:
          "BASF offers advanced chemical solutions for construction. Our portfolio includes concrete admixtures, waterproofing solutions, concrete repair and protection solutions, and performance grouts.",
        alt: "BASF Master Builders Solutions"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Roofblok",
        vendorLogo: "roofblok.gif",
        vendorUrl: "http://www.roofblok.com/",
        subHeader:
          "Designed for use with standard pedestal systems and drainage boards",
        alt: "Roofblok roof pavers"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "Conproco",
        vendorLogo: "conproco.jpg",
        vendorUrl: "http://conproco.com/",
        subHeader:
          "Premium concrete and masonry products with field proven performance",
        alt: "Conproco concrete and stone repair"
      },
      {
        id: "waterproofing",
        cat: 4,
        vendorName: "York Manufacturing",
        vendorLogo: "york.png",
        vendorUrl: "http://www.yorkmfg.com/",
        subHeader:
          "York Manufacturing produces a full line of moisture control products and systems",
        alt: "York manufacturing"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Sunnybrook",
        vendorLogo: "sunnybrook.png",
        vendorUrl: "http://www.sunnybrookpressedconcrete.com/",
        subHeader: "Architectural Pavers for Walkways, Plazas, Roofs, and more",
        alt: "Sunnybrook roof pavers"
      },
      {
        id: "division_7",
        cat: 7,
        vendorName: "Berger",
        vendorLogo: "berger.png",
        vendorUrl: "http://www.bergerbp.com/",
        subHeader:
          "Specializing in roof drainage systems, moisture protection, snow retention systems, and ventilation products",
        alt: "Berger Building Products"
      },
      {
        id: "commercial_metal",
        cat: 5,
        vendorName: "Centria",
        vendorLogo: "centria.png",
        vendorUrl: "http://www.centriaperformance.com/",
        subHeader:
          "Factory-foamed, insulated metal wall and roof panel systems for architectural and industrial applications",
        alt: "Centria metal panels"
      },
      {
        id: "commercial_metal",
        cat: 5,
        vendorName: "Fabral",
        vendorLogo: "fabral.jpg",
        vendorUrl: "http://www.fabral.com",
        subHeader:
          "FABRAL provides industry leading metal roofing, metal siding and wall panel systems for all types of applications",
        alt: "Fabral metal panels"
      },
      {
        id: "commercial_metal",
        cat: 5,
        vendorName: "Pac-Clad",
        vendorLogo: "pacclad.png",
        vendorUrl: "https://www.pac-clad.com/",
        subHeader:
          "PAC-CLAD is a metal roofing panel and metal wall panel supplier to the architectural metal industry",
        alt: "Petersen Pac-Clad metal panels"
      },
      {
        id: "commercial_metal",
        cat: 5,
        vendorName: "ATAS",
        vendorLogo: "atas.png",
        vendorUrl: "https://www.atas.com/",
        subHeader:
          "ATAS offers metal roofs and metal wall panels for commercial and residential buildings",
        alt: "ATAS metal panels"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Rever Copper",
        vendorLogo: "revere.png",
        vendorUrl: "http://www.reverecopper.com",
        subHeader:
          "When the world needs architectural copper, the world turns to Revere Copper Products",
        alt: "Revere Copper and Freedom Gray"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Aurubis Copper",
        vendorLogo: "aurubis.png",
        vendorUrl: "https://www.aurubis.com/en",
        subHeader:
          "Aurubis' NORDIC copper provides unique factory-applied patina finish options",
        alt: "Aurubis copper"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Fabral",
        vendorLogo: "fabral.jpg",
        vendorUrl:
          "http://www.fabral.com/architectural/color-and-finishes/standard-architectural-colors/",
        subHeader:
          "Fabral's flatsheets colors are available in aluminum and galvalume",
        alt: "Fabral flatsheets"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Rheinzink Zinc",
        vendorLogo: "rheinzink.png",
        vendorUrl: "https://www.rheinzink.us/",
        subHeader:
          "RHEINZINK produces top-quality titanium zinc offering different surface qualities",
        alt: "Rheinzink Zinc"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Firestone",
        vendorLogo: "firestone.png",
        vendorUrl: "http://firestonebpco.com/technical-information/colors/",
        subHeader:
          "LITSCO stocks Firestone Kynar painted aluminum and galvalume",
        alt: "Firestone metal"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Aluminum",
        vendorLogo: "aluminum.png",
        subHeader:
          "LITSCO stocks mill finish aluminum and baked enamel painted sheets in a wide range of thicknesses",
        alt: "aluminum flatsheets"
      },
      {
        id: "flatsheets",
        cat: 8,
        vendorName: "Galvanized Steel",
        vendorLogo: "galvanized.jpg",
        subHeader: "LITSCO stocks unpainted galvanized steel sheets",
        alt: "galvanized flatsheets"
      },
      {
        id: "roofing",
        cat: 99,
        type: "division_7_supplies",
        linkTo: 3,
        productName: "Roofing Supplies",
        detailImg: "roofing.png",
        alt: "LITSCO supplies Roofing products",
        description:
          "Cold Fluid Applied, PMMA, EPDM, SBS, Modified Bitumen, Hot Asphalt, TPO, PVC, Insulation, Energy Star White"
      },
      {
        id: "waterproofing",
        cat: 99,
        type: "division_7_supplies",
        linkTo: 4,
        productName: "Waterpoofing Supplies",
        detailImg: "waterproofing.jpg",
        alt: "LITSCO supplies Waterproofing products",
        description:
          "PMMA, Hot Applied, Cold Fluid Applied, Drainage Matt, Insulation, Extruded Polystyrene, Expanded Polystyrene"
      },
      {
        id: "commercial_metal",
        cat: 99,
        type: "division_7_supplies",
        linkTo: 5,
        productName: "Commecial Metal Panels",
        detailImg: "commercialmetal.jpg",
        alt: "LITSCO supplies Commecial Metal panels",
        description:
          "Insulated Metal Wall Panels, Insulated Metal Roof Panels, Standing Seam, Concealed Fastener Systems"
      },
      {
        id: "envelope",
        cat: 99,
        type: "division_7_supplies",
        linkTo: 6,
        productName: "Building Envelope",
        detailImg: "buildingenvelope.png",
        alt: "LITSCO supplies Building Envelope products",
        description:
          "Air Vapor Barriers, Sheet Membrane, Fluid Applied Membrane, Silicone Sealants, Extruded Polystyrene"
      },
      {
        id: "division_7_specialties",
        cat: 99,
        type: "division_7_specialties",
        linkTo: 7,
        productName: "Division 7 Specialties",
        detailImg: "d7specialties.jpg",
        alt: "LITSCO supplies Division 7 Specialty products",
        description:
          "Roof and Plaza Paver systems, Garden Roofing, Hatches, Vents, Gutters"
      },
      {
        id: "flatsheets",
        cat: 99,
        type: "division_7_supplies",
        linkTo: 8,
        productName: "Flatsheet Metal",
        detailImg: "flatsheets.jpg",
        alt: "LITSCO supplies Flatsheet metal",
        description:
          "Kynar painted Aluminum, Copper Sheets, Zinc Sheets, Flatsheet Metal"
      }
    ];

    return allData;
  }
]);
