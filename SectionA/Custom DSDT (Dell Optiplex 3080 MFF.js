/*
 * Intel ACPI Component Architecture
 * AML/ASL+ Disassembler version 20200925 (64-bit version)
 * Copyright (c) 2000 - 2020 Intel Corporation
 * 
 * Disassembling to symbolic ASL+ operators
 *
 * Disassembly of iASLDK6ZDe.aml, Tue Sep 16 19:15:55 2025
 *
 * Original Table Header:
 *     Signature        "DSDT"
 *     Length           0x000078AB (30891)
 *     Revision         0x02
 *     Checksum         0x09
 *     OEM ID           "Apple"
 *     OEM Table ID     "iMacXX"
 *     OEM Revision     0x01072009 (17244169)
 *     Compiler ID      "INTL"
 *     Compiler Version 0x20200925 (538970405)
 */
DefinitionBlock ("", "DSDT", 2, "Apple", "iMacXX", 0x01072009)
{
    External (_SB_.PCI0.IGPU.AINT, MethodObj)    // 2 Arguments
    External (_SB_.PCI0.IGPU.HDOS, MethodObj)    // 0 Arguments
    External (_SB_.PCI0.LPCB.SPTS, MethodObj)    // 1 Arguments
    External (_SB_.PCI0.LPCB.SWAK, MethodObj)    // 1 Arguments
    External (CPSC, IntObj)
    External (DSEN, IntObj)
    External (ECON, IntObj)
    External (GUAM, MethodObj)    // 1 Arguments
    External (OSYS, IntObj)
    External (PBCL, MethodObj)    // 0 Arguments
    External (PDC0, UnknownObj)
    External (PDC1, UnknownObj)
    External (PDC2, UnknownObj)
    External (PDC3, UnknownObj)
    External (PDC4, UnknownObj)
    External (PDC5, UnknownObj)
    External (PDC6, UnknownObj)
    External (PDC7, UnknownObj)
    External (PNHM, IntObj)
    External (S0ID, UnknownObj)

    Name (PMBA, 0x1800)
    Name (SMCR, 0x1830)
    Name (IOST, Zero)
    Name (PEBS, 0xF8000000)
    Name (PELN, 0x04000000)
    Name (MCHB, 0xFED10000)
    Name (MCHL, 0x8000)
    Name (EGPB, 0xFED19000)
    Name (EGPL, 0x1000)
    Name (DMIB, 0xFED18000)
    Name (DMIL, 0x1000)
    Name (IFPB, 0xFED14000)
    Name (IFPL, 0x1000)
    Name (TTTB, 0xFED20000)
    Name (TTTL, 0x00020000)
    Name (TCBR, 0xFED08000)
    Name (TCLT, 0x1000)
    Name (VTBS, 0xFED90000)
    Name (VTLN, 0x4000)
    Name (DPPB, 0xFED98000)
    Name (DPPL, 0x8000)
    Name (SRCB, 0xFED1C000)
    Name (SRCL, 0x4000)
    Name (APCB, 0xFEC00000)
    Name (APCL, 0x1000)
    Name (HPTB, 0xFED00000)
    Name (HPTC, 0xFED1F404)
    Name (TPMM, 0xFED40000)
    Name (TPML, 0x1000)
    Name (TPMB, 0xFFFFFFFF)
    Name (TPMC, 0xFFFFFFFF)
    Name (TMF1, Zero)
    Name (TMF2, Zero)
    Name (TMF3, Zero)
    Name (TRST, 0x02)
    Name (ASSB, Zero)
    Name (AOTB, Zero)
    Name (AAXB, Zero)
    Name (FMBL, One)
    Name (FDTP, 0x02)
    Name (FUPS, 0x04)
    Name (FUWS, 0x03)
    Name (FEMD, 0x04)
    Name (PEER, One)
    Name (PEPD, One)
    Name (PECS, One)
    Name (PPIL, 0x1C)
    Name (PPMB, 0xBAEFE098)
    Name (TOPM, Zero)
    Name (ROMS, 0xFFE00000)
    Name (ITKE, Zero)
    Name (MECS, 0xFFFF)
    Name (TBUS, 0xFF)
    Name (OAST, 0x35)
    Name (CSMI, 0x61)
    Name (SMIA, 0xB2)
    Name (SMIB, 0xB3)
    Name (SMBL, 0x20)
    Name (SMIP, 0xB2)
    Name (GPBS, 0x0500)
    Name (GPLN, 0x80)
    Name (SS1, Zero)
    Name (SS2, Zero)
    Name (SS3, One)
    Name (SS4, One)
    Name (VGAF, One)
    OperationRegion (GNVS, SystemMemory, 0xB6F2A000, 0x0767)
    Field (GNVS, AnyAcc, Lock, Preserve)
    {
        OSYS,   16, 
        SMIF,   8, 
        PRM0,   8, 
        PRM1,   8, 
        SCIF,   8, 
        PRM2,   8, 
        PRM3,   8, 
        LCKF,   8, 
        PRM4,   8, 
        PRM5,   8, 
        P80D,   32, 
        Offset (0x10), 
        PWRS,   8, 
        LIDS,   8, 
        DBGS,   8, 
        THOF,   8, 
        ACT1,   8, 
        ACTT,   8, 
        PSVT,   8, 
        TC1V,   8, 
        TC2V,   8, 
        TSPV,   8, 
        CRTT,   8, 
        DTSE,   8, 
        DTS1,   8, 
        DTS2,   8, 
        DTSF,   8, 
        Offset (0x25), 
        REVN,   8, 
        RES3,   8, 
        Offset (0x28), 
        APIC,   8, 
        TCNT,   8, 
        PCP0,   8, 
        PCP1,   8, 
        PPCM,   8, 
        PPMF,   32, 
        C67L,   8, 
        NATP,   8, 
        CMAP,   8, 
        LPTP,   8, 
        FDCP,   8, 
        CMCP,   8, 
        CIRP,   8, 
        SMSC,   8, 
        W381,   8, 
        SMC1,   8, 
        EMAE,   8, 
        EMAP,   16, 
        EMAL,   16, 
        Offset (0x42), 
        MEFE,   8, 
        DSTS,   8, 
        Offset (0x46), 
        TPME,   8, 
        TPMD,   8, 
        MORD,   8, 
        TCGP,   8, 
        PPRP,   32, 
        PPRQ,   8, 
        LPPR,   8, 
        GTF0,   56, 
        GTF2,   56, 
        IDEM,   8, 
        GTF1,   56, 
        BDID,   8, 
        Offset (0x78), 
        OSCC,   8, 
        NEXP,   8, 
        SBV1,   8, 
        SBV2,   8, 
        Offset (0x81), 
        DSEN,   8, 
        ECON,   8, 
        GPIC,   8, 
        CTYL,   8, 
        L01C,   8, 
        VFN0,   8, 
        VFN1,   8, 
        ATMC,   8, 
        PTMC,   8, 
        ATRA,   8, 
        PTRA,   8, 
        PNHM,   32, 
        TBAB,   32, 
        TBAH,   32, 
        ATPC,   8, 
        PTPC,   8, 
        RTIP,   8, 
        TSOD,   8, 
        PFLV,   8, 
        PKGA,   8, 
        PAMT,   8, 
        AC0F,   8, 
        AC1F,   8, 
        DTS3,   8, 
        DTS4,   8, 
        RTD3,   8, 
        DDR3,   8, 
        BLCP,   8, 
        BLCC,   8, 
        BLCB,   32, 
        LDSB,   8, 
        XTUB,   32, 
        XTUS,   32, 
        XMPB,   32, 
        NVME,   8, 
        BLCT,   32
    }

    Name (PCHH, One)
    Name (PCHL, 0x02)
    Method (PCHV, 0, Serialized)
    {
        If ((PCHS == One))
        {
            Return (PCHH) /* \PCHH */
        }

        If ((PCHS == 0x02))
        {
            Return (PCHL) /* \PCHL */
        }
    }

    Method (NHPG, 0, Serialized)
    {
    }

    Method (NPME, 0, Serialized)
    {
    }

    Scope (_SB)
    {
        Device (PCI0)
        {
            Name (_ADR, Zero)  // _ADR: Address
            Name (_UID, Zero)  // _UID: Unique ID
            Name (_BBN, Zero)  // _BBN: BIOS Bus Number
            Name (_CID, EisaId ("PNP0A03") /* PCI Bus */)  // _CID: Compatible ID
            Name (_HID, EisaId ("PNP0A08") /* PCI Express Bus */)  // _HID: Hardware ID
            Name (_PRT, Package (0x35)  // _PRT: PCI Routing Table
            {
                Package (0x04)
                {
                    0x001FFFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x001FFFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x001FFFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x001FFFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x001EFFFF, 
                    Zero, 
                    Zero, 
                    0x14
                }, 

                Package (0x04)
                {
                    0x001EFFFF, 
                    One, 
                    Zero, 
                    0x15
                }, 

                Package (0x04)
                {
                    0x001EFFFF, 
                    0x02, 
                    Zero, 
                    0x16
                }, 

                Package (0x04)
                {
                    0x001EFFFF, 
                    0x03, 
                    Zero, 
                    0x17
                }, 

                Package (0x04)
                {
                    0x001DFFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x001DFFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x001DFFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x001DFFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x001CFFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x001CFFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x001CFFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x001CFFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x001BFFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x001BFFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x001BFFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x001BFFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0019FFFF, 
                    Zero, 
                    Zero, 
                    0x15
                }, 

                Package (0x04)
                {
                    0x0019FFFF, 
                    One, 
                    Zero, 
                    0x16
                }, 

                Package (0x04)
                {
                    0x0019FFFF, 
                    0x02, 
                    Zero, 
                    0x17
                }, 

                Package (0x04)
                {
                    0x0019FFFF, 
                    0x03, 
                    Zero, 
                    0x14
                }, 

                Package (0x04)
                {
                    0x0016FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0016FFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x0016FFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x0016FFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0015FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0015FFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x0015FFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x0015FFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0014FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0014FFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x0014FFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x0014FFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0013FFFF, 
                    Zero, 
                    Zero, 
                    0x14
                }, 

                Package (0x04)
                {
                    0x0012FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0012FFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x0012FFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x0012FFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0001FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0001FFFF, 
                    One, 
                    Zero, 
                    0x11
                }, 

                Package (0x04)
                {
                    0x0001FFFF, 
                    0x02, 
                    Zero, 
                    0x12
                }, 

                Package (0x04)
                {
                    0x0001FFFF, 
                    0x03, 
                    Zero, 
                    0x13
                }, 

                Package (0x04)
                {
                    0x0002FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0004FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0005FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }, 

                Package (0x04)
                {
                    0x0008FFFF, 
                    Zero, 
                    Zero, 
                    0x10
                }
            })
            OperationRegion (HBUS, PCI_Config, Zero, 0x0100)
            Field (HBUS, AnyAcc, NoLock, Preserve)
            {
                Offset (0x40), 
                EPEN,   1, 
                    ,   17, 
                EPBR,   20, 
                Offset (0x48), 
                MHEN,   1, 
                    ,   14, 
                MHBR,   17, 
                Offset (0x50), 
                GCLK,   1, 
                Offset (0x54), 
                D0EN,   1, 
                Offset (0x60), 
                PXEN,   1, 
                PXSZ,   2, 
                    ,   23, 
                PXBR,   6, 
                Offset (0x68), 
                DIEN,   1, 
                    ,   11, 
                DIBR,   20, 
                Offset (0x70), 
                    ,   20, 
                MEBR,   12, 
                Offset (0x80), 
                Offset (0x81), 
                Offset (0x82), 
                Offset (0x83), 
                Offset (0x84), 
                Offset (0x85), 
                Offset (0x86), 
                Offset (0x87), 
                Offset (0xA8), 
                    ,   20, 
                TUUD,   12, 
                Offset (0xBC), 
                    ,   20, 
                TLUD,   19, 
                Offset (0xC8), 
                    ,   7, 
                HTSE,   1
            }

            Name (BUF0, ResourceTemplate ()
            {
                WordBusNumber (ResourceProducer, MinFixed, MaxFixed, PosDecode,
                    0x0000,             // Granularity
                    0x0000,             // Range Minimum
                    0x00FF,             // Range Maximum
                    0x0000,             // Translation Offset
                    0x0100,             // Length
                    ,, _Y00)
                DWordIO (ResourceProducer, MinFixed, MaxFixed, PosDecode, EntireRange,
                    0x00000000,         // Granularity
                    0x00000000,         // Range Minimum
                    0x00000CF7,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00000CF8,         // Length
                    ,, , TypeStatic, DenseTranslation)
                IO (Decode16,
                    0x0CF8,             // Range Minimum
                    0x0CF8,             // Range Maximum
                    0x01,               // Alignment
                    0x08,               // Length
                    )
                DWordIO (ResourceProducer, MinFixed, MaxFixed, PosDecode, EntireRange,
                    0x00000000,         // Granularity
                    0x00000D00,         // Range Minimum
                    0x0000FFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x0000F300,         // Length
                    ,, , TypeStatic, DenseTranslation)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000A0000,         // Range Minimum
                    0x000BFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00020000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000C0000,         // Range Minimum
                    0x000C3FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000C4000,         // Range Minimum
                    0x000C7FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000C8000,         // Range Minimum
                    0x000CBFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000CC000,         // Range Minimum
                    0x000CFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000D0000,         // Range Minimum
                    0x000D3FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000D4000,         // Range Minimum
                    0x000D7FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000D8000,         // Range Minimum
                    0x000DBFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000DC000,         // Range Minimum
                    0x000DFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000E0000,         // Range Minimum
                    0x000E3FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000E4000,         // Range Minimum
                    0x000E7FFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000E8000,         // Range Minimum
                    0x000EBFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000EC000,         // Range Minimum
                    0x000EFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00004000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, Cacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x000F0000,         // Range Minimum
                    0x000FFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x00010000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, NonCacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0x00000000,         // Range Minimum
                    0xF7FFFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0xF8000000,         // Length
                    ,, _Y01, AddressRangeMemory, TypeStatic)
                QWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, NonCacheable, ReadWrite,
                    0x0000000000000000, // Granularity
                    0x0000000000010000, // Range Minimum
                    0x000000000001FFFF, // Range Maximum
                    0x0000000000000000, // Translation Offset
                    0x0000000000010000, // Length
                    ,, _Y02, AddressRangeMemory, TypeStatic)
                DWordMemory (ResourceProducer, PosDecode, MinFixed, MaxFixed, NonCacheable, ReadWrite,
                    0x00000000,         // Granularity
                    0xFC800000,         // Range Minimum
                    0xFE7FFFFF,         // Range Maximum
                    0x00000000,         // Translation Offset
                    0x02000000,         // Length
                    ,, , AddressRangeMemory, TypeStatic)
            })
            Name (PC_L, Zero)
            Name (PC_B, Zero)
            Name (MH_B, Zero)
            Name (DM_B, Zero)
            Name (EP_B, Zero)
            Method (GPLE, 0, Serialized)
            {
                If ((PC_L == Zero))
                {
                    PC_L = (0x10000000 >> PXSZ) /* \_SB_.PCI0.PXSZ */
                }

                Return (PC_L) /* \_SB_.PCI0.PC_L */
            }

            Method (_CRS, 0, Serialized)  // _CRS: Current Resource Settings
            {
                Local0 = GPLE ()
                CreateWordField (BUF0, \_SB.PCI0._Y00._MAX, PBMX)  // _MAX: Maximum Base Address
                PBMX = ((Local0 - 0x14) - 0x02)
                CreateWordField (BUF0, \_SB.PCI0._Y00._LEN, PBLN)  // _LEN: Length
                PBLN = ((Local0 - 0x14) - One)
                CreateDWordField (BUF0, \_SB.PCI0._Y01._MIN, M1MN)  // _MIN: Minimum Base Address
                CreateDWordField (BUF0, \_SB.PCI0._Y01._MAX, M1MX)  // _MAX: Maximum Base Address
                CreateDWordField (BUF0, \_SB.PCI0._Y01._LEN, M1LN)  // _LEN: Length
                M1MN = M32B /* \_SB_.PCI0.M32B */
                M1LN = M32L /* \_SB_.PCI0.M32L */
                M1MX = ((M1MN + M1LN) - One)
                If ((M64L == Zero))
                {
                    CreateQWordField (BUF0, \_SB.PCI0._Y02._LEN, MSLN)  // _LEN: Length
                    MSLN = Zero
                }
                Else
                {
                    CreateQWordField (BUF0, \_SB.PCI0._Y02._LEN, M2LN)  // _LEN: Length
                    CreateQWordField (BUF0, \_SB.PCI0._Y02._MIN, M2MN)  // _MIN: Minimum Base Address
                    CreateQWordField (BUF0, \_SB.PCI0._Y02._MAX, M2MX)  // _MAX: Maximum Base Address
                    M2MN = M64B /* \_SB_.PCI0.M64B */
                    M2LN = M64L /* \_SB_.PCI0.M64L */
                    M2MX = ((M2MN + M2LN) - One)
                }

                Return (BUF0) /* \_SB_.PCI0.BUF0 */
            }

            Name (GUID, ToUUID ("33db4d5b-1ff7-401c-9657-7441c03dd766") /* PCI Host Bridge Device */)
            Name (SUPP, Zero)
            Name (CTRL, Zero)
            Method (_OSC, 4, Serialized)  // _OSC: Operating System Capabilities
            {
                Local0 = Arg3
                CreateDWordField (Local0, Zero, CDW1)
                CreateDWordField (Local0, 0x04, CDW2)
                CreateDWordField (Local0, 0x08, CDW3)
                SUPP = CDW2 /* \_SB_.PCI0._OSC.CDW2 */
                CTRL = CDW3 /* \_SB_.PCI0._OSC.CDW3 */
                If ((Arg0 == GUID))
                {
                    If (~(CDW1 & One))
                    {
                        If ((CTRL & 0x02))
                        {
                            NHPG ()
                        }

                        If ((CTRL & 0x04))
                        {
                            NPME ()
                        }
                    }

                    If ((Arg1 & One))
                    {
                        CDW1 = 0x08
                    }

                    If ((CDW3 == CTRL))
                    {
                        CDW1 = 0x10
                    }

                    SUPP = CTRL /* \_SB_.PCI0.CTRL */
                    OSCC = CTRL /* \_SB_.PCI0.CTRL */
                    Return (Local0)
                }
                Else
                {
                    CDW1 = 0x04
                    Return (Local0)
                }
            }

            Device (MCHC)
            {
                Name (_ADR, Zero)  // _ADR: Address
            }

            Scope (\_SB.PCI0)
            {
                OperationRegion (SANV, SystemMemory, 0xB6F2ED18, 0x01F4)
                Field (SANV, AnyAcc, Lock, Preserve)
                {
                    ASLB,   32, 
                    IMON,   8, 
                    IGDS,   8, 
                    IBTT,   8, 
                    IPAT,   8, 
                    IPSC,   8, 
                    IBIA,   8, 
                    ISSC,   8, 
                    IDMS,   8, 
                    IF1E,   8, 
                    HVCO,   8, 
                    GSMI,   8, 
                    PAVP,   8, 
                    CADL,   8, 
                    CSTE,   16, 
                    NSTE,   16, 
                    NDID,   8, 
                    DID1,   32, 
                    DID2,   32, 
                    DID3,   32, 
                    DID4,   32, 
                    DID5,   32, 
                    DID6,   32, 
                    DID7,   32, 
                    DID8,   32, 
                    DID9,   32, 
                    DIDA,   32, 
                    DIDB,   32, 
                    DIDC,   32, 
                    DIDD,   32, 
                    DIDE,   32, 
                    DIDF,   32, 
                    DIDX,   32, 
                    NXD1,   32, 
                    NXD2,   32, 
                    NXD3,   32, 
                    NXD4,   32, 
                    NXD5,   32, 
                    NXD6,   32, 
                    NXD7,   32, 
                    NXD8,   32, 
                    NXDX,   32, 
                    KSV0,   32, 
                    KSV1,   8, 
                    BRTL,   8, 
                    ALSE,   8, 
                    ALAF,   8, 
                    IPTP,   8, 
                    EDPV,   8, 
                    SGMD,   8, 
                    SGFL,   8, 
                    SGGP,   8, 
                    HRE0,   8, 
                    HRG0,   32, 
                    HRA0,   8, 
                    PWE0,   8, 
                    PWG0,   32, 
                    PWAO,   8, 
                    P1GP,   8, 
                    HRE1,   8, 
                    HRG1,   32, 
                    HRA1,   8, 
                    PWE1,   8, 
                    PWG1,   32, 
                    PWA1,   8, 
                    P2GP,   8, 
                    HRE2,   8, 
                    HRG2,   32, 
                    HRA2,   8, 
                    PWE2,   8, 
                    PWG2,   32, 
                    PWA2,   8, 
                    DLPW,   16, 
                    DLHR,   16, 
                    EECP,   8, 
                    XBAS,   32, 
                    GBAS,   32, 
                    NVGA,   32, 
                    NVHA,   32, 
                    AMDA,   32, 
                    LTRX,   8, 
                    OBFX,   8, 
                    LTRZ,   8, 
                    OBFZ,   8, 
                    LTRY,   8, 
                    OBFY,   8, 
                    LTRW,   8, 
                    OBFA,   8, 
                    SMSL,   16, 
                    SNSL,   16, 
                    P0UB,   8, 
                    P1UB,   8, 
                    P2UB,   8, 
                    P3UB,   8, 
                    PCSL,   8, 
                    PBGE,   8, 
                    M64B,   64, 
                    M64L,   64, 
                    CPEX,   32, 
                    EEC1,   8, 
                    EEC2,   8, 
                    SBN0,   8, 
                    SBN1,   8, 
                    SBN2,   8, 
                    M32B,   32, 
                    M32L,   32, 
                    P0WK,   32, 
                    P1WK,   32, 
                    P2WK,   32, 
                    VTDS,   8, 
                    VTB1,   32, 
                    VTB2,   32, 
                    VTB3,   32, 
                    VE1V,   16, 
                    VE2V,   16, 
                    SBN3,   8, 
                    P3GP,   8, 
                    HRE3,   8, 
                    HRG3,   32, 
                    HRA3,   8, 
                    PWE3,   8, 
                    PWG3,   32, 
                    PWA3,   8, 
                    P3WK,   32, 
                    EEC3,   8, 
                    RPIN,   8, 
                    RPBA,   32, 
                    DGOP,   32, 
                    P0SC,   8, 
                    P1SC,   8, 
                    P2SC,   8, 
                    Offset (0x1F4)
                }

                Device (IGPU)
                {
                    Name (_ADR, 0x00020000)  // _ADR: Address
                    Name (TMP1, Package (0x01)
                    {
                        0xFFFFFFFF
                    })
                    Name (TMP2, Package (0x02)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP3, Package (0x03)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP4, Package (0x04)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP5, Package (0x05)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP6, Package (0x06)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP7, Package (0x07)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP8, Package (0x08)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMP9, Package (0x09)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPA, Package (0x0A)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPB, Package (0x0B)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPC, Package (0x0C)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPD, Package (0x0D)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPE, Package (0x0E)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPF, Package (0x0F)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Name (TMPG, Package (0x10)
                    {
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF, 
                        0xFFFFFFFF
                    })
                    Method (_DOS, 1, NotSerialized)  // _DOS: Disable Output Switching
                    {
                        DSEN = (Arg0 & 0x07)
                        If (((Arg0 & 0x03) == Zero))
                        {
                            If (CondRefOf (HDOS))
                            {
                                HDOS ()
                            }
                        }
                    }

                    Method (_DOD, 0, NotSerialized)  // _DOD: Display Output Devices
                    {
                        If ((IPTP == One))
                        {
                            NDID = One
                        }
                        Else
                        {
                            NDID = Zero
                        }

                        If ((DIDL == Zero))
                        {
                            DID1 = SDDL (DIDL)
                        }

                        If ((DDL2 == Zero))
                        {
                            DID2 = SDDL (DDL2)
                        }

                        If ((DDL3 == Zero))
                        {
                            DID3 = SDDL (DDL3)
                        }

                        If ((DDL4 == Zero))
                        {
                            DID4 = SDDL (DDL4)
                        }

                        If ((DDL5 == Zero))
                        {
                            DID5 = SDDL (DDL5)
                        }

                        If ((DDL6 == Zero))
                        {
                            DID6 = SDDL (DDL6)
                        }

                        If ((DDL7 == Zero))
                        {
                            DID7 = SDDL (DDL7)
                        }

                        If ((DDL8 == Zero))
                        {
                            DID8 = SDDL (DDL8)
                        }

                        If ((DDL9 == Zero))
                        {
                            DID9 = SDDL (DDL9)
                        }

                        If ((DD10 == Zero))
                        {
                            DIDA = SDDL (DD10)
                        }

                        If ((DD11 == Zero))
                        {
                            DIDB = SDDL (DD11)
                        }

                        If ((DD12 == Zero))
                        {
                            DIDC = SDDL (DD12)
                        }

                        If ((DD13 == Zero))
                        {
                            DIDD = SDDL (DD13)
                        }

                        If ((DD14 == Zero))
                        {
                            DIDE = SDDL (DD14)
                        }

                        If ((DD15 == Zero))
                        {
                            DIDF = SDDL (DD15)
                        }

                        If ((NDID == One))
                        {
                            If ((IPTP == One))
                            {
                                TMP1 [Zero] = 0x00023480
                            }
                            Else
                            {
                                TMP1 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            }

                            Return (TMP1) /* \_SB_.PCI0.IGPU.TMP1 */
                        }

                        If ((NDID == 0x02))
                        {
                            TMP2 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            If ((IPTP == One))
                            {
                                TMP2 [One] = 0x00023480
                            }
                            Else
                            {
                                TMP2 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            }

                            Return (TMP2) /* \_SB_.PCI0.IGPU.TMP2 */
                        }

                        If ((NDID == 0x03))
                        {
                            TMP3 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP3 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            If ((IPTP == One))
                            {
                                TMP3 [0x02] = 0x00023480
                            }
                            Else
                            {
                                TMP3 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            }

                            Return (TMP3) /* \_SB_.PCI0.IGPU.TMP3 */
                        }

                        If ((NDID == 0x04))
                        {
                            TMP4 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP4 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP4 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            If ((IPTP == One))
                            {
                                TMP4 [0x03] = 0x00023480
                            }
                            Else
                            {
                                TMP4 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            }

                            Return (TMP4) /* \_SB_.PCI0.IGPU.TMP4 */
                        }

                        If ((NDID == 0x05))
                        {
                            TMP5 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP5 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP5 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMP5 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            If ((IPTP == One))
                            {
                                TMP5 [0x04] = 0x00023480
                            }
                            Else
                            {
                                TMP5 [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            }

                            Return (TMP5) /* \_SB_.PCI0.IGPU.TMP5 */
                        }

                        If ((NDID == 0x06))
                        {
                            TMP6 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP6 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP6 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMP6 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMP6 [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            If ((IPTP == One))
                            {
                                TMP6 [0x05] = 0x00023480
                            }
                            Else
                            {
                                TMP6 [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            }

                            Return (TMP6) /* \_SB_.PCI0.IGPU.TMP6 */
                        }

                        If ((NDID == 0x07))
                        {
                            TMP7 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP7 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP7 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMP7 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMP7 [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMP7 [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            If ((IPTP == One))
                            {
                                TMP7 [0x06] = 0x00023480
                            }
                            Else
                            {
                                TMP7 [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            }

                            Return (TMP7) /* \_SB_.PCI0.IGPU.TMP7 */
                        }

                        If ((NDID == 0x08))
                        {
                            TMP8 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP8 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP8 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMP8 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMP8 [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMP8 [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMP8 [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            If ((IPTP == One))
                            {
                                TMP8 [0x07] = 0x00023480
                            }
                            Else
                            {
                                TMP8 [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            }

                            Return (TMP8) /* \_SB_.PCI0.IGPU.TMP8 */
                        }

                        If ((NDID == 0x09))
                        {
                            TMP9 [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMP9 [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMP9 [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMP9 [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMP9 [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMP9 [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMP9 [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMP9 [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            If ((IPTP == One))
                            {
                                TMP9 [0x08] = 0x00023480
                            }
                            Else
                            {
                                TMP9 [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            }

                            Return (TMP9) /* \_SB_.PCI0.IGPU.TMP9 */
                        }

                        If ((NDID == 0x0A))
                        {
                            TMPA [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPA [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPA [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPA [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPA [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPA [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPA [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPA [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPA [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            If ((IPTP == One))
                            {
                                TMPA [0x09] = 0x00023480
                            }
                            Else
                            {
                                TMPA [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            }

                            Return (TMPA) /* \_SB_.PCI0.IGPU.TMPA */
                        }

                        If ((NDID == 0x0B))
                        {
                            TMPB [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPB [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPB [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPB [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPB [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPB [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPB [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPB [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPB [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPB [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            If ((IPTP == One))
                            {
                                TMPB [0x0A] = 0x00023480
                            }
                            Else
                            {
                                TMPB [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            }

                            Return (TMPB) /* \_SB_.PCI0.IGPU.TMPB */
                        }

                        If ((NDID == 0x0C))
                        {
                            TMPC [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPC [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPC [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPC [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPC [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPC [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPC [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPC [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPC [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPC [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            TMPC [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            If ((IPTP == One))
                            {
                                TMPC [0x0B] = 0x00023480
                            }
                            Else
                            {
                                TMPC [0x0B] = (0x00010000 | DIDC) /* \_SB_.PCI0.DIDC */
                            }

                            Return (TMPC) /* \_SB_.PCI0.IGPU.TMPC */
                        }

                        If ((NDID == 0x0D))
                        {
                            TMPD [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPD [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPD [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPD [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPD [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPD [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPD [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPD [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPD [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPD [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            TMPD [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            TMPD [0x0B] = (0x00010000 | DIDC) /* \_SB_.PCI0.DIDC */
                            If ((IPTP == One))
                            {
                                TMPD [0x0C] = 0x00023480
                            }
                            Else
                            {
                                TMPD [0x0C] = (0x00010000 | DIDD) /* \_SB_.PCI0.DIDD */
                            }

                            Return (TMPD) /* \_SB_.PCI0.IGPU.TMPD */
                        }

                        If ((NDID == 0x0E))
                        {
                            TMPE [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPE [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPE [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPE [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPE [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPE [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPE [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPE [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPE [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPE [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            TMPE [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            TMPE [0x0B] = (0x00010000 | DIDC) /* \_SB_.PCI0.DIDC */
                            TMPE [0x0C] = (0x00010000 | DIDD) /* \_SB_.PCI0.DIDD */
                            If ((IPTP == One))
                            {
                                TMPE [0x0D] = 0x00023480
                            }
                            Else
                            {
                                TMPE [0x0D] = (0x00010000 | DIDE) /* \_SB_.PCI0.DIDE */
                            }

                            Return (TMPE) /* \_SB_.PCI0.IGPU.TMPE */
                        }

                        If ((NDID == 0x0F))
                        {
                            TMPF [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPF [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPF [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPF [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPF [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPF [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPF [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPF [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPF [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPF [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            TMPF [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            TMPF [0x0B] = (0x00010000 | DIDC) /* \_SB_.PCI0.DIDC */
                            TMPF [0x0C] = (0x00010000 | DIDD) /* \_SB_.PCI0.DIDD */
                            TMPF [0x0D] = (0x00010000 | DIDE) /* \_SB_.PCI0.DIDE */
                            If ((IPTP == One))
                            {
                                TMPF [0x0E] = 0x00023480
                            }
                            Else
                            {
                                TMPF [0x0E] = (0x00010000 | DIDF) /* \_SB_.PCI0.DIDF */
                            }

                            Return (TMPF) /* \_SB_.PCI0.IGPU.TMPF */
                        }

                        If ((NDID == 0x10))
                        {
                            TMPG [Zero] = (0x00010000 | DID1) /* \_SB_.PCI0.DID1 */
                            TMPG [One] = (0x00010000 | DID2) /* \_SB_.PCI0.DID2 */
                            TMPG [0x02] = (0x00010000 | DID3) /* \_SB_.PCI0.DID3 */
                            TMPG [0x03] = (0x00010000 | DID4) /* \_SB_.PCI0.DID4 */
                            TMPG [0x04] = (0x00010000 | DID5) /* \_SB_.PCI0.DID5 */
                            TMPG [0x05] = (0x00010000 | DID6) /* \_SB_.PCI0.DID6 */
                            TMPG [0x06] = (0x00010000 | DID7) /* \_SB_.PCI0.DID7 */
                            TMPG [0x07] = (0x00010000 | DID8) /* \_SB_.PCI0.DID8 */
                            TMPG [0x08] = (0x00010000 | DID9) /* \_SB_.PCI0.DID9 */
                            TMPG [0x09] = (0x00010000 | DIDA) /* \_SB_.PCI0.DIDA */
                            TMPG [0x0A] = (0x00010000 | DIDB) /* \_SB_.PCI0.DIDB */
                            TMPG [0x0B] = (0x00010000 | DIDC) /* \_SB_.PCI0.DIDC */
                            TMPG [0x0C] = (0x00010000 | DIDD) /* \_SB_.PCI0.DIDD */
                            TMPG [0x0D] = (0x00010000 | DIDE) /* \_SB_.PCI0.DIDE */
                            TMPG [0x0E] = (0x00010000 | DIDF) /* \_SB_.PCI0.DIDF */
                            TMPG [0x0F] = 0x00023480
                            Return (TMPG) /* \_SB_.PCI0.IGPU.TMPG */
                        }

                        Return (Package (0x01)
                        {
                            0x0400
                        })
                    }

                    Device (DD01)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID1) == 0x0400))
                            {
                                EDPV = One
                                NXDX = NXD1 /* \_SB_.PCI0.NXD1 */
                                DIDX = DID1 /* \_SB_.PCI0.DID1 */
                            }

                            If ((DID1 == Zero))
                            {
                                Return (One)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID1))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            Return (CDDS (DID1))
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD1) /* \_SB_.PCI0.NXD1 */
                            }

                            Return (NDDS (DID1))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD02)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID2) == 0x0400))
                            {
                                EDPV = 0x02
                                NXDX = NXD2 /* \_SB_.PCI0.NXD2 */
                                DIDX = DID2 /* \_SB_.PCI0.DID2 */
                                Return (0x02)
                            }

                            If ((DID2 == Zero))
                            {
                                Return (0x02)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID2))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((LIDS == One))
                            {
                                Return (Zero)
                            }

                            Return (CDDS (DID2))
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD2) /* \_SB_.PCI0.NXD2 */
                            }

                            Return (NDDS (DID2))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD03)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID3) == 0x0400))
                            {
                                EDPV = 0x03
                                NXDX = NXD3 /* \_SB_.PCI0.NXD3 */
                                DIDX = DID3 /* \_SB_.PCI0.DID3 */
                                Return (0x03)
                            }

                            If ((DID3 == Zero))
                            {
                                Return (0x03)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID3))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID3 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID3))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD == 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD3) /* \_SB_.PCI0.NXD3 */
                            }

                            Return (NDDS (DID3))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD04)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID4) == 0x0400))
                            {
                                EDPV = 0x04
                                NXDX = NXD4 /* \_SB_.PCI0.NXD4 */
                                DIDX = DID4 /* \_SB_.PCI0.DID4 */
                                Return (0x04)
                            }

                            If ((DID4 == Zero))
                            {
                                Return (0x04)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID4))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID4 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID4))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD4) /* \_SB_.PCI0.NXD4 */
                            }

                            Return (NDDS (DID4))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD05)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID5) == 0x0400))
                            {
                                EDPV = 0x05
                                NXDX = NXD5 /* \_SB_.PCI0.NXD5 */
                                DIDX = DID5 /* \_SB_.PCI0.DID5 */
                            }

                            If ((DID5 == Zero))
                            {
                                Return (0x05)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID5))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID5 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID5))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD5) /* \_SB_.PCI0.NXD5 */
                            }

                            Return (NDDS (DID5))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD06)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID6) == 0x0400))
                            {
                                EDPV = 0x06
                                NXDX = NXD5 /* \_SB_.PCI0.NXD5 */
                                DIDX = DID6 /* \_SB_.PCI0.DID6 */
                                Return (0x06)
                            }

                            If ((DID6 == Zero))
                            {
                                Return (0x06)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID6))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID6 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID6))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD6) /* \_SB_.PCI0.NXD6 */
                            }

                            Return (NDDS (DID6))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD07)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID7) == 0x0400))
                            {
                                EDPV = 0x07
                                NXDX = NXD7 /* \_SB_.PCI0.NXD7 */
                                DIDX = DID7 /* \_SB_.PCI0.DID7 */
                                Return (0x07)
                            }

                            If ((DID7 == Zero))
                            {
                                Return (0x07)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID7))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID7 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID7))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD7) /* \_SB_.PCI0.NXD7 */
                            }

                            Return (NDDS (DID7))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD08)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID8) == 0x0400))
                            {
                                EDPV = 0x08
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DID8 /* \_SB_.PCI0.DID8 */
                                Return (0x08)
                            }

                            If ((DID8 == Zero))
                            {
                                Return (0x08)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID8))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID8 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID8))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DID8))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD09)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DID9) == 0x0400))
                            {
                                EDPV = 0x09
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DID9 /* \_SB_.PCI0.DID9 */
                                Return (0x09)
                            }

                            If ((DID9 == Zero))
                            {
                                Return (0x09)
                            }
                            Else
                            {
                                Return ((0xFFFF & DID9))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DID9 == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DID9))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DID9))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0A)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDA) == 0x0400))
                            {
                                EDPV = 0x0A
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDA /* \_SB_.PCI0.DIDA */
                                Return (0x0A)
                            }

                            If ((DIDA == Zero))
                            {
                                Return (0x0A)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDA))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDA == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DIDA))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDA))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0B)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDB) == 0x0400))
                            {
                                EDPV = 0x0B
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDB /* \_SB_.PCI0.DIDB */
                                Return (0x0B)
                            }

                            If ((DIDB == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDB))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDB == Zero))
                            {
                                Return (0x0B)
                            }
                            Else
                            {
                                Return (CDDS (DIDB))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDB))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0C)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDC) == 0x0400))
                            {
                                EDPV = 0x0C
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDC /* \_SB_.PCI0.DIDC */
                                Return (0x0C)
                            }

                            If ((DIDC == Zero))
                            {
                                Return (0x0C)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDC))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDC == Zero))
                            {
                                Return (0x0C)
                            }
                            Else
                            {
                                Return (CDDS (DIDC))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDC))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0D)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDD) == 0x0400))
                            {
                                EDPV = 0x0D
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDD /* \_SB_.PCI0.DIDD */
                                Return (0x0D)
                            }

                            If ((DIDD == Zero))
                            {
                                Return (0x0D)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDD))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDD == Zero))
                            {
                                Return (0x0D)
                            }
                            Else
                            {
                                Return (CDDS (DIDD))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDD))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0E)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDE) == 0x0400))
                            {
                                EDPV = 0x0E
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDE /* \_SB_.PCI0.DIDE */
                                Return (0x0E)
                            }

                            If ((DIDE == Zero))
                            {
                                Return (0x0E)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDE))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDE == Zero))
                            {
                                Return (0x0E)
                            }
                            Else
                            {
                                Return (CDDS (DIDE))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDE))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD0F)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If (((0x0F00 & DIDF) == 0x0400))
                            {
                                EDPV = 0x0F
                                NXDX = NXD8 /* \_SB_.PCI0.NXD8 */
                                DIDX = DIDF /* \_SB_.PCI0.DIDF */
                                Return (0x0F)
                            }

                            If ((DIDF == Zero))
                            {
                                Return (0x0F)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDF))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((DIDC == Zero))
                            {
                                Return (0x0F)
                            }
                            Else
                            {
                                Return (CDDS (DIDF))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXD8) /* \_SB_.PCI0.NXD8 */
                            }

                            Return (NDDS (DIDF))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Device (DD1F)
                    {
                        Method (_ADR, 0, Serialized)  // _ADR: Address
                        {
                            If ((EDPV == Zero))
                            {
                                Return (0x1F)
                            }
                            Else
                            {
                                Return ((0xFFFF & DIDX))
                            }
                        }

                        Method (_DCS, 0, NotSerialized)  // _DCS: Display Current Status
                        {
                            If ((EDPV == Zero))
                            {
                                Return (Zero)
                            }
                            Else
                            {
                                Return (CDDS (DIDX))
                            }
                        }

                        Method (_DGS, 0, NotSerialized)  // _DGS: Display Graphics State
                        {
                            If ((((SGMD & 0x7F) == One) && CondRefOf (SNXD)))
                            {
                                Return (NXDX) /* \_SB_.PCI0.NXDX */
                            }

                            Return (NDDS (DIDX))
                        }

                        Method (_DSS, 1, NotSerialized)  // _DSS: Device Set State
                        {
                            DSST (Arg0)
                        }
                    }

                    Method (_BCL, 0, NotSerialized)  // _BCL: Brightness Control Levels
                    {
                        If (CondRefOf (\PBCL))
                        {
                            Return (PBCL ())
                        }
                        Else
                        {
                            Return (Package (0x67)
                            {
                                0x50, 
                                0x32, 
                                Zero, 
                                One, 
                                0x02, 
                                0x03, 
                                0x04, 
                                0x05, 
                                0x06, 
                                0x07, 
                                0x08, 
                                0x09, 
                                0x0A, 
                                0x0B, 
                                0x0C, 
                                0x0D, 
                                0x0E, 
                                0x0F, 
                                0x10, 
                                0x11, 
                                0x12, 
                                0x13, 
                                0x14, 
                                0x15, 
                                0x16, 
                                0x17, 
                                0x18, 
                                0x19, 
                                0x1A, 
                                0x1B, 
                                0x1C, 
                                0x1D, 
                                0x1E, 
                                0x1F, 
                                0x20, 
                                0x21, 
                                0x22, 
                                0x23, 
                                0x24, 
                                0x25, 
                                0x26, 
                                0x27, 
                                0x28, 
                                0x29, 
                                0x2A, 
                                0x2B, 
                                0x2C, 
                                0x2D, 
                                0x2E, 
                                0x2F, 
                                0x30, 
                                0x31, 
                                0x32, 
                                0x33, 
                                0x34, 
                                0x35, 
                                0x36, 
                                0x37, 
                                0x38, 
                                0x39, 
                                0x3A, 
                                0x3B, 
                                0x3C, 
                                0x3D, 
                                0x3E, 
                                0x3F, 
                                0x40, 
                                0x41, 
                                0x42, 
                                0x43, 
                                0x44, 
                                0x45, 
                                0x46, 
                                0x47, 
                                0x48, 
                                0x49, 
                                0x4A, 
                                0x4B, 
                                0x4C, 
                                0x4D, 
                                0x4E, 
                                0x4F, 
                                0x50, 
                                0x51, 
                                0x52, 
                                0x53, 
                                0x54, 
                                0x55, 
                                0x56, 
                                0x57, 
                                0x58, 
                                0x59, 
                                0x5A, 
                                0x5B, 
                                0x5C, 
                                0x5D, 
                                0x5E, 
                                0x5F, 
                                0x60, 
                                0x61, 
                                0x62, 
                                0x63, 
                                0x64
                            })
                        }
                    }

                    Method (_BCM, 1, NotSerialized)  // _BCM: Brightness Control Method
                    {
                        If (((Arg0 >= Zero) && (Arg0 <= 0x64)))
                        {
                            AINT (One, Arg0)
                            BRTL = Arg0
                        }
                    }

                    Method (_BQC, 0, NotSerialized)  // _BQC: Brightness Query Current
                    {
                        Return (BRTL) /* \_SB_.PCI0.BRTL */
                    }
                }

                Method (SDDL, 1, NotSerialized)
                {
                    NDID++
                    Local0 = (Arg0 & 0x0F0F)
                    Local1 = (0x80000000 | Local0)
                    If ((DIDL == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL2 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL3 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL4 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL5 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL6 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL7 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL8 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DDL9 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD10 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD11 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD12 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD13 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD14 == Local0))
                    {
                        Return (Local1)
                    }

                    If ((DD15 == Local0))
                    {
                        Return (Local1)
                    }

                    Return (Zero)
                }

                Method (CDDS, 1, NotSerialized)
                {
                    Local0 = (Arg0 & 0x0F0F)
                    If ((Zero == Local0))
                    {
                        Return (0x1D)
                    }

                    If ((CADL == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL2 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL3 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL4 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL5 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL6 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL7 == Local0))
                    {
                        Return (0x1F)
                    }

                    If ((CAL8 == Local0))
                    {
                        Return (0x1F)
                    }

                    Return (0x1D)
                }

                Method (NDDS, 1, NotSerialized)
                {
                    Local0 = (Arg0 & 0x0F0F)
                    If ((Zero == Local0))
                    {
                        Return (Zero)
                    }

                    If ((NADL == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL2 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL3 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL4 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL5 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL6 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL7 == Local0))
                    {
                        Return (One)
                    }

                    If ((NDL8 == Local0))
                    {
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (DSST, 1, NotSerialized)
                {
                    If (((Arg0 & 0xC0000000) == 0xC0000000))
                    {
                        CSTE = NSTE /* \_SB_.PCI0.NSTE */
                    }
                }

                Scope (\_SB.PCI0)
                {
                    OperationRegion (MCHP, PCI_Config, 0x40, 0xC0)
                    Field (MCHP, AnyAcc, NoLock, Preserve)
                    {
                        Offset (0x14), 
                        AUDE,   8, 
                        Offset (0x60), 
                        TASM,   10, 
                        Offset (0x62)
                    }
                }

                OperationRegion (IGDP, PCI_Config, 0x40, 0xC0)
                Field (IGDP, AnyAcc, NoLock, Preserve)
                {
                    Offset (0x10), 
                        ,   1, 
                    GIVD,   1, 
                        ,   2, 
                    GUMA,   3, 
                    Offset (0x12), 
                    Offset (0x14), 
                        ,   4, 
                    GMFN,   1, 
                    Offset (0x18), 
                    Offset (0xA4), 
                    ASLE,   8, 
                    Offset (0xA8), 
                    GSSE,   1, 
                    GSSB,   14, 
                    GSES,   1, 
                    Offset (0xB0), 
                        ,   12, 
                    CDVL,   1, 
                    Offset (0xB2), 
                    Offset (0xB5), 
                    LBPC,   8, 
                    Offset (0xBC), 
                    ASLS,   32
                }

                OperationRegion (IGDM, SystemMemory, ASLB, 0x2000)
                Field (IGDM, AnyAcc, NoLock, Preserve)
                {
                    SIGN,   128, 
                    SIZE,   32, 
                    OVER,   32, 
                    SVER,   256, 
                    VVER,   128, 
                    GVER,   128, 
                    MBOX,   32, 
                    DMOD,   32, 
                    PCON,   32, 
                    DVER,   64, 
                    Offset (0x100), 
                    DRDY,   32, 
                    CSTS,   32, 
                    CEVT,   32, 
                    Offset (0x120), 
                    DIDL,   32, 
                    DDL2,   32, 
                    DDL3,   32, 
                    DDL4,   32, 
                    DDL5,   32, 
                    DDL6,   32, 
                    DDL7,   32, 
                    DDL8,   32, 
                    CPDL,   32, 
                    CPL2,   32, 
                    CPL3,   32, 
                    CPL4,   32, 
                    CPL5,   32, 
                    CPL6,   32, 
                    CPL7,   32, 
                    CPL8,   32, 
                    CAL2,   32, 
                    CAL3,   32, 
                    CAL4,   32, 
                    CAL5,   32, 
                    CAL6,   32, 
                    CAL7,   32, 
                    CAL8,   32, 
                    NADL,   32, 
                    NDL2,   32, 
                    NDL3,   32, 
                    NDL4,   32, 
                    NDL5,   32, 
                    NDL6,   32, 
                    NDL7,   32, 
                    NDL8,   32, 
                    ASLP,   32, 
                    TIDX,   32, 
                    CHPD,   32, 
                    CLID,   32, 
                    CDCK,   32, 
                    SXSW,   32, 
                    EVTS,   32, 
                    CNOT,   32, 
                    NRDY,   32, 
                    DDL9,   32, 
                    DD10,   32, 
                    DD11,   32, 
                    DD12,   32, 
                    DD13,   32, 
                    DD14,   32, 
                    DD15,   32, 
                    CPL9,   32, 
                    CP10,   32, 
                    CP11,   32, 
                    CP12,   32, 
                    CP13,   32, 
                    CP14,   32, 
                    CP15,   32, 
                    Offset (0x200), 
                    SCIE,   1, 
                    GEFC,   4, 
                    GXFC,   3, 
                    GESF,   8, 
                    Offset (0x204), 
                    PARM,   32, 
                    DSLP,   32, 
                    Offset (0x300), 
                    ARDY,   32, 
                    ASLC,   32, 
                    TCHE,   32, 
                    ALSI,   32, 
                    BCLP,   32, 
                    PFIT,   32, 
                    CBLV,   32, 
                    BCLM,   320, 
                    CPFM,   32, 
                    EPFM,   32, 
                    PLUT,   592, 
                    PFMB,   32, 
                    CCDV,   32, 
                    PCFT,   32, 
                    SROT,   32, 
                    IUER,   32, 
                    FDSS,   64, 
                    FDSP,   32, 
                    STAT,   32, 
                    Offset (0x400), 
                    RVBT,   49152, 
                    PHED,   32, 
                    BDDC,   2048
                }

                Name (DBTB, Package (0x15)
                {
                    Zero, 
                    0x07, 
                    0x38, 
                    0x01C0, 
                    0x0E00, 
                    0x3F, 
                    0x01C7, 
                    0x0E07, 
                    0x01F8, 
                    0x0E38, 
                    0x0FC0, 
                    Zero, 
                    Zero, 
                    Zero, 
                    Zero, 
                    Zero, 
                    0x7000, 
                    0x7007, 
                    0x7038, 
                    0x71C0, 
                    0x7E00
                })
                Name (CDCT, Package (0x05)
                {
                    Package (0x02)
                    {
                        0xE4, 
                        0x0140
                    }, 

                    Package (0x02)
                    {
                        0xDE, 
                        0x014D
                    }, 

                    Package (0x02)
                    {
                        0xDE, 
                        0x014D
                    }, 

                    Package (0x02)
                    {
                        Zero, 
                        Zero
                    }, 

                    Package (0x02)
                    {
                        0xDE, 
                        0x014D
                    }
                })
                Name (SUCC, One)
                Name (NVLD, 0x02)
                Name (CRIT, 0x04)
                Name (NCRT, 0x06)
                Method (GSCI, 0, Serialized)
                {
                    Method (GBDA, 0, Serialized)
                    {
                        If ((GESF == Zero))
                        {
                            PARM = 0x0659
                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == One))
                        {
                            PARM = 0x00300482
                            If ((S0ID == One))
                            {
                                PARM |= 0x0100
                            }

                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x04))
                        {
                            PARM &= 0xEFFF0000
                            PARM &= (DerefOf (DBTB [IBTT]) << 0x10)
                            PARM |= IBTT /* \_SB_.PCI0.IBTT */
                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x05))
                        {
                            PARM = IPSC /* \_SB_.PCI0.IPSC */
                            PARM |= (IPAT << 0x08)
                            PARM += 0x0100
                            PARM |= (LIDS << 0x10)
                            PARM += 0x00010000
                            PARM |= (IBIA << 0x14)
                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x07))
                        {
                            PARM = GIVD /* \_SB_.PCI0.GIVD */
                            PARM ^= One
                            PARM |= (GMFN << One)
                            PARM |= 0x1800
                            PARM |= (IDMS << 0x11)
                            PARM |= (DerefOf (DerefOf (CDCT [HVCO]) [CDVL]) << 
                                0x15)
                            GESF = One
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x0A))
                        {
                            PARM = Zero
                            If (ISSC)
                            {
                                PARM |= 0x03
                            }

                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x0B))
                        {
                            PARM = KSV0 /* \_SB_.PCI0.KSV0 */
                            GESF = KSV1 /* \_SB_.PCI0.KSV1 */
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        GESF = Zero
                        Return (CRIT) /* \_SB_.PCI0.CRIT */
                    }

                    Method (SBCB, 0, Serialized)
                    {
                        If ((GESF == Zero))
                        {
                            PARM = Zero
                            PARM = 0x000F87DD
                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == One))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x03))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x04))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x05))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x07))
                        {
                            If (((S0ID == One) && (OSYS < 0x07DF)))
                            {
                                If (((PARM & 0xFF) == One))
                                {
                                    GUAM (One)
                                }

                                If (((PARM & 0xFF) == Zero))
                                {
                                    GUAM (Zero)
                                }
                            }

                            If ((PARM == Zero))
                            {
                                Local0 = CLID /* \_SB_.PCI0.CLID */
                                If ((0x80000000 & Local0))
                                {
                                    CLID &= 0x0F
                                    GLID (CLID)
                                }
                            }

                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x08))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x09))
                        {
                            IBTT = (PARM & 0xFF)
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x0A))
                        {
                            IPSC = (PARM & 0xFF)
                            If (((PARM >> 0x08) & 0xFF))
                            {
                                IPAT = ((PARM >> 0x08) & 0xFF)
                                IPAT--
                            }

                            IBIA = ((PARM >> 0x14) & 0x07)
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x0B))
                        {
                            IF1E = ((PARM >> One) & One)
                            If ((PARM & 0x0001E000))
                            {
                                IDMS = ((PARM >> 0x0D) & 0x0F)
                            }
                            Else
                            {
                                IDMS = ((PARM >> 0x11) & 0x0F)
                            }

                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x10))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x11))
                        {
                            PARM = (LIDS << 0x08)
                            PARM += 0x0100
                            GESF = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x12))
                        {
                            If ((PARM & One))
                            {
                                If (((PARM >> One) == One))
                                {
                                    ISSC = One
                                }
                                Else
                                {
                                    GESF = Zero
                                    Return (CRIT) /* \_SB_.PCI0.CRIT */
                                }
                            }
                            Else
                            {
                                ISSC = Zero
                            }

                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x13))
                        {
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        If ((GESF == 0x14))
                        {
                            PAVP = (PARM & 0x0F)
                            GESF = Zero
                            PARM = Zero
                            Return (SUCC) /* \_SB_.PCI0.SUCC */
                        }

                        GESF = Zero
                        Return (SUCC) /* \_SB_.PCI0.SUCC */
                    }

                    If ((GEFC == 0x04))
                    {
                        GXFC = GBDA ()
                    }

                    If ((GEFC == 0x06))
                    {
                        GXFC = SBCB ()
                    }

                    GEFC = Zero
                    CPSC = One
                    GSSE = Zero
                    SCIE = Zero
                    Return (Zero)
                }

                Method (PDRD, 0, NotSerialized)
                {
                    Return (!DRDY)
                }

                Method (PSTS, 0, NotSerialized)
                {
                    If ((CSTS > 0x02))
                    {
                        Sleep (ASLP)
                    }

                    Return ((CSTS == 0x03))
                }

                Method (GNOT, 2, NotSerialized)
                {
                    If (PDRD ())
                    {
                        Return (One)
                    }

                    CEVT = Arg0
                    CSTS = 0x03
                    If (((CHPD == Zero) && (Arg1 == Zero)))
                    {
                        Notify (IGPU, Arg1)
                    }

                    If (CondRefOf (HNOT)){}
                    Else
                    {
                        Notify (IGPU, 0x80) // Status Change
                    }

                    Return (Zero)
                }

                Method (GHDS, 1, NotSerialized)
                {
                    TIDX = Arg0
                    Return (GNOT (One, Zero))
                }

                Method (GLID, 1, NotSerialized)
                {
                    If ((Arg0 == One))
                    {
                        CLID = 0x03
                    }
                    Else
                    {
                        CLID = Arg0
                    }

                    If (GNOT (0x02, Zero))
                    {
                        CLID |= 0x80000000
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (GDCK, 1, NotSerialized)
                {
                    CDCK = Arg0
                    Return (GNOT (0x04, Zero))
                }

                Method (PARD, 0, NotSerialized)
                {
                    If (!ARDY)
                    {
                        Sleep (ASLP)
                    }

                    Return (!ARDY)
                }

                Method (IUEH, 1, Serialized)
                {
                    IUER &= 0xC0
                    IUER ^= (One << Arg0)
                    If ((Arg0 <= 0x04))
                    {
                        Return (AINT (0x05, Zero))
                    }
                    Else
                    {
                        Return (AINT (Arg0, Zero))
                    }
                }

                Method (AINT, 2, NotSerialized)
                {
                    If (!(TCHE & (One << Arg0)))
                    {
                        Return (One)
                    }

                    If (PARD ())
                    {
                        Return (One)
                    }

                    If (((Arg0 >= 0x05) && (Arg0 <= 0x07)))
                    {
                        ASLC = (One << Arg0)
                        ASLE = One
                        Local2 = Zero
                        While (((Local2 < 0xFA) && (ASLC != Zero)))
                        {
                            Sleep (0x04)
                            Local2++
                        }

                        Return (Zero)
                    }

                    If ((Arg0 == 0x02))
                    {
                        If (CPFM)
                        {
                            Local0 = (CPFM & 0x0F)
                            Local1 = (EPFM & 0x0F)
                            If ((Local0 == One))
                            {
                                If ((Local1 & 0x06))
                                {
                                    PFIT = 0x06
                                }
                                ElseIf ((Local1 & 0x08))
                                {
                                    PFIT = 0x08
                                }
                                Else
                                {
                                    PFIT = One
                                }
                            }

                            If ((Local0 == 0x06))
                            {
                                If ((Local1 & 0x08))
                                {
                                    PFIT = 0x08
                                }
                                ElseIf ((Local1 & One))
                                {
                                    PFIT = One
                                }
                                Else
                                {
                                    PFIT = 0x06
                                }
                            }

                            If ((Local0 == 0x08))
                            {
                                If ((Local1 & One))
                                {
                                    PFIT = One
                                }
                                ElseIf ((Local1 & 0x06))
                                {
                                    PFIT = 0x06
                                }
                                Else
                                {
                                    PFIT = 0x08
                                }
                            }
                        }
                        Else
                        {
                            PFIT ^= 0x07
                        }

                        PFIT |= 0x80000000
                        ASLC = 0x04
                    }
                    ElseIf ((Arg0 == One))
                    {
                        BCLP = ((Arg1 * 0xFF) / 0x64)
                        BCLP |= 0x80000000
                        ASLC = 0x02
                    }
                    ElseIf ((Arg0 == Zero))
                    {
                        ALSI = Arg1
                        ASLC = One
                    }
                    Else
                    {
                        Return (One)
                    }

                    ASLE = One
                    Return (Zero)
                }

                Method (_DSM, 4, Serialized)  // _DSM: Device-Specific Method
                {
                    If ((Arg0 == ToUUID ("3e5b41c6-eb1d-4260-9d15-c71fbadae414") /* Unknown UUID */))
                    {
                        Switch (ToInteger (Arg2))
                        {
                            Case (Zero)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "iGfx Supported Functions Bitmap "
                                    Return (0x0001E7FF)
                                }
                            }
                            Case (One)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = " Adapter Power State Notification "
                                    If (((S0ID == One) && (OSYS < 0x07DF)))
                                    {
                                        If (((DerefOf (Arg3 [Zero]) & 0xFF) == One))
                                        {
                                            GUAM (One)
                                        }

                                        Local0 = (DerefOf (Arg3 [One]) & 0xFF)
                                        If ((Local0 == Zero))
                                        {
                                            GUAM (Zero)
                                        }
                                    }

                                    If ((DerefOf (Arg3 [Zero]) == Zero))
                                    {
                                        Local0 = CLID /* \_SB_.PCI0.CLID */
                                        If ((0x80000000 & Local0))
                                        {
                                            CLID &= 0x0F
                                            GLID (CLID)
                                        }
                                    }

                                    Return (One)
                                }
                            }
                            Case (0x02)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "Display Power State Notification "
                                    Return (One)
                                }
                            }
                            Case (0x03)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "BIOS POST Completion Notification "
                                    Return (One)
                                }
                            }
                            Case (0x04)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "Pre-Hires Set Mode "
                                    Return (One)
                                }
                            }
                            Case (0x05)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "Post-Hires Set Mode "
                                    Return (One)
                                }
                            }
                            Case (0x06)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "SetDisplayDeviceNotification"
                                    Return (One)
                                }
                            }
                            Case (0x07)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "SetBootDevicePreference "
                                    IBTT = (DerefOf (Arg3 [Zero]) & 0xFF)
                                    Return (One)
                                }
                            }
                            Case (0x08)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "SetPanelPreference "
                                    IPSC = (DerefOf (Arg3 [Zero]) & 0xFF)
                                    If ((DerefOf (Arg3 [One]) & 0xFF))
                                    {
                                        IPAT = (DerefOf (Arg3 [One]) & 0xFF)
                                        IPAT--
                                    }

                                    IBIA = ((DerefOf (Arg3 [0x02]) >> 0x04) & 0x07)
                                    Return (One)
                                }
                            }
                            Case (0x09)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "FullScreenDOS "
                                    Return (One)
                                }
                            }
                            Case (0x0A)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "APM Complete "
                                    Local0 = (LIDS << 0x08)
                                    Local0 += 0x0100
                                    Return (Local0)
                                }
                            }
                            Case (0x0D)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "GetBootDisplayPreference "
                                    Local0 = ((DerefOf (Arg3 [0x03]) << 0x18) | (DerefOf (
                                        Arg3 [0x02]) << 0x10))
                                    Local0 &= 0xEFFF0000
                                    Local0 &= (DerefOf (DBTB [IBTT]) << 0x10)
                                    Local0 |= IBTT /* \_SB_.PCI0.IBTT */
                                    Return (Local0)
                                }
                            }
                            Case (0x0E)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "GetPanelDetails "
                                    Local0 = IPSC /* \_SB_.PCI0.IPSC */
                                    Local0 |= (IPAT << 0x08)
                                    Local0 += 0x0100
                                    Local0 |= (LIDS << 0x10)
                                    Local0 += 0x00010000
                                    Local0 |= (IBIA << 0x14)
                                    Return (Local0)
                                }
                            }
                            Case (0x0F)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "GetInternalGraphics "
                                    Local0 = GIVD /* \_SB_.PCI0.GIVD */
                                    Local0 ^= One
                                    Local0 |= (GMFN << One)
                                    Local0 |= 0x1800
                                    Local0 |= (IDMS << 0x11)
                                    Local0 |= (DerefOf (DerefOf (CDCT [HVCO]) [CDVL]) << 
                                        0x15)
                                    Return (Local0)
                                }
                            }
                            Case (0x10)
                            {
                                If ((Arg1 == One))
                                {
                                    Debug = "GetAKSV "
                                    Name (KSVP, Package (0x02)
                                    {
                                        0x80000000, 
                                        0x8000
                                    })
                                    KSVP [Zero] = KSV0 /* \_SB_.PCI0.KSV0 */
                                    KSVP [One] = KSV1 /* \_SB_.PCI0.KSV1 */
                                    Return (KSVP) /* \_SB_.PCI0._DSM.KSVP */
                                }
                            }

                        }
                    }

                    Return (Buffer (One)
                    {
                         0x00                                             // .
                    })
                }

                Device (IPUA)
                {
                    Name (_ADR, 0x3480)  // _ADR: Address
                    Method (_STA, 0, NotSerialized)  // _STA: Status
                    {
                        If ((IPTP == One))
                        {
                            Return (0x0F)
                        }
                        Else
                        {
                            Return (Zero)
                        }
                    }
                }

                Device (IPU0)
                {
                    Name (_ADR, 0x00050000)  // _ADR: Address
                    Method (_DSM, 4, NotSerialized)  // _DSM: Device-Specific Method
                    {
                        If ((Arg0 == ToUUID ("9a9e6ab4-e3fc-475d-ad1c-c4789e4cfe90") /* Unknown UUID */))
                        {
                            If ((Arg2 == Zero))
                            {
                                If ((Arg1 == Zero))
                                {
                                    Return (Buffer (One)
                                    {
                                         0x07                                             // .
                                    })
                                }
                                Else
                                {
                                    Return (Zero)
                                }
                            }

                            If ((Arg2 == One))
                            {
                                Return (0x64503C19)
                            }

                            If ((Arg2 == 0x02))
                            {
                                Return (0xFFF0783C)
                            }
                        }

                        Return (Zero)
                    }
                }

                Device (B0D4)
                {
                    Name (_ADR, 0x00040000)  // _ADR: Address
                }

                Device (UBX0)
                {
                    Name (_ADR, 0x00080000)  // _ADR: Address
                    Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                    {
                        ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                        Package (0x05)
                        {
                            Package (0x02)
                            {
                                "AAPL,slot-name", 
                                "Built in"
                            }, 

                            Package (0x02)
                            {
                                "pci-debug", 
                                "0:8:0"
                            }, 

                            Package (0x02)
                            {
                                "device-id", 
                                Buffer (0x04)
                                {
                                     0x11, 0x19, 0x00, 0x00                           // ....
                                }
                            }, 

                            Package (0x02)
                            {
                                "device_type", 
                                "Guassian Mixture"
                            }, 

                            Package (0x02)
                            {
                                "model", 
                                "Intel Corporation, Guassian Mixture Model"
                            }
                        }
                    })
                }
            }

            Device (XHC)
            {
                Name (_ADR, 0x00140000)  // _ADR: Address
                OperationRegion (XPRT, PCI_Config, Zero, 0x0100)
                Field (XPRT, AnyAcc, NoLock, Preserve)
                {
                    DVID,   16, 
                    Offset (0x10), 
                    XADL,   32, 
                    XADH,   32, 
                    Offset (0x50)
                }

                Field (XPRT, ByteAcc, NoLock, Preserve)
                {
                    Offset (0x74), 
                    D0D3,   2, 
                    Offset (0x75), 
                    PMEE,   1, 
                        ,   6, 
                    PMES,   1
                }

                Method (GPEH, 0, NotSerialized)
                {
                    If ((DVID == 0xFFFF))
                    {
                        Return (Zero)
                    }

                    Local0 = PMES /* \_SB_.PCI0.XHC_.PMES */
                    PMES = One
                    If ((PMEE && Local0))
                    {
                        Notify (XHC, 0x02) // Device Wake
                        Notify (PWRB, 0x02) // Device Wake
                    }
                }

                Method (SSPA, 0, NotSerialized)
                {
                    If ((PCHV () == PCHH))
                    {
                        Return (0x11)
                    }
                    Else
                    {
                        Return (0x0D)
                    }
                }

                Method (CUID, 1, Serialized)
                {
                    If ((Arg0 == ToUUID ("7c9512a9-1705-4cb4-af7d-506a2423ab71") /* Unknown UUID */))
                    {
                        Return (One)
                    }

                    Return (Zero)
                }

                Device (RHUB)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (GPLD, 2, Serialized)
                    {
                        Name (PCKG, Package (0x01)
                        {
                            Buffer (0x10){}
                        })
                        CreateField (DerefOf (PCKG [Zero]), Zero, 0x07, REV)
                        REV = One
                        CreateField (DerefOf (PCKG [Zero]), 0x40, One, VISI)
                        VISI = Arg0
                        CreateField (DerefOf (PCKG [Zero]), 0x57, 0x08, GPOS)
                        GPOS = Arg1
                        Return (PCKG) /* \_SB_.PCI0.XHC_.RHUB.GPLD.PCKG */
                    }

                    Method (GUPC, 2, Serialized)
                    {
                        Name (PCKG, Package (0x04)
                        {
                            One, 
                            0x03, 
                            Zero, 
                            Zero
                        })
                        PCKG [Zero] = Arg0
                        Return (PCKG) /* \_SB_.PCI0.XHC_.RHUB.GUPC.PCKG */
                    }

                    Method (TUPC, 2, Serialized)
                    {
                        Name (PCKG, Package (0x04)
                        {
                            One, 
                            Zero, 
                            0xFF, 
                            Zero
                        })
                        PCKG [One] = Arg0
                        Return (PCKG) /* \_SB_.PCI0.XHC_.RHUB.TUPC.PCKG */
                    }

                    Method (TPLD, 2, Serialized)
                    {
                        Name (PCKG, Package (0x02)
                        {
                            Buffer (0x10){}
                        })
                        CreateField (DerefOf (PCKG [Zero]), Zero, 0x07, REV)
                        REV = One
                        CreateField (DerefOf (PCKG [Zero]), 0x40, One, VISI)
                        VISI = Arg0
                        CreateField (DerefOf (PCKG [Zero]), 0x57, 0x08, GPOS)
                        GPOS = Arg1
                        CreateField (DerefOf (PCKG [Zero]), 0x4A, 0x04, SHAP)
                        SHAP = One
                        CreateField (DerefOf (PCKG [Zero]), 0x20, 0x10, WID)
                        WID = 0x08
                        CreateField (DerefOf (PCKG [Zero]), 0x30, 0x10, HGT)
                        HGT = 0x03
                        Return (PCKG) /* \_SB_.PCI0.XHC_.RHUB.TPLD.PCKG */
                    }

                    Device (HS01)
                    {
                        Name (_ADR, One)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, One))
                        }
                    }

                    Device (HS02)
                    {
                        Name (_ADR, 0x02)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x02))
                        }
                    }

                    Device (HS03)
                    {
                        Name (_ADR, 0x03)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, 0xFF))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x03))
                        }

                        Device (BLTH)
                        {
                            Name (_ADR, Zero)  // _ADR: Address
                            Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                            {
                                Return (TUPC (One, 0xFF))
                            }

                            Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                            {
                                Return (TPLD (One, 0x03))
                            }
                        }
                    }

                    Device (HS04)
                    {
                        Name (_ADR, 0x04)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x04))
                        }
                    }

                    Device (HS05)
                    {
                        Name (_ADR, 0x05)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x05))
                        }
                    }

                    Device (HS06)
                    {
                        Name (_ADR, 0x06)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x06))
                        }
                    }

                    Device (HS07)
                    {
                        Name (_ADR, 0x07)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x07))
                        }
                    }

                    Device (HS08)
                    {
                        Name (_ADR, 0x08)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x08))
                        }
                    }

                    Device (HS09)
                    {
                        Name (_ADR, 0x09)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x09))
                        }
                    }

                    Device (HS10)
                    {
                        Name (_ADR, 0x0A)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (One, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (One, 0x0A))
                        }
                    }

                    Device (HS11)
                    {
                        Name (_ADR, 0x0B)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x0B))
                        }
                    }

                    Device (HS12)
                    {
                        Name (_ADR, 0x0C)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x0C))
                        }
                    }

                    Device (HS13)
                    {
                        Name (_ADR, 0x0D)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x0D))
                        }
                    }

                    Device (HS14)
                    {
                        Name (_ADR, 0x0E)  // _ADR: Address
                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (TUPC (Zero, Zero))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (TPLD (Zero, 0x0E))
                        }
                    }

                    Device (SS01)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + Zero))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (One, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (One, 0x11))
                        }
                    }

                    Device (SS02)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + One))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (One, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (One, 0x12))
                        }
                    }

                    Device (SS03)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x02))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (One, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (One, 0x13))
                        }
                    }

                    Device (SS04)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x03))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (One, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (One, 0x14))
                        }
                    }

                    Device (SS05)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x04))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (One, 0x15))
                        }
                    }

                    Device (SS06)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x05))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (Zero, 0x16))
                        }
                    }

                    Device (SS07)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x06))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (Zero, 0x17))
                        }
                    }

                    Device (SS08)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x07))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (Zero, 0x18))
                        }
                    }

                    Device (SS09)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x08))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (Zero, 0x19))
                        }
                    }

                    Device (SS10)
                    {
                        Method (_ADR, 0, NotSerialized)  // _ADR: Address
                        {
                            Return ((SSPA () + 0x09))
                        }

                        Method (_UPC, 0, NotSerialized)  // _UPC: USB Port Capabilities
                        {
                            Return (GUPC (Zero, 0x03))
                        }

                        Method (_PLD, 0, NotSerialized)  // _PLD: Physical Location of Device
                        {
                            Return (GPLD (Zero, 0x1A))
                        }
                    }
                }

                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x09)
                    {
                        Package (0x02)
                        {
                            "device-id", 
                            Buffer (0x04)
                            {
                                 0xAF, 0xA3, 0x00, 0x00                           // ....
                            }
                        }, 

                        Package (0x02)
                        {
                            "AAPL,current-available", 
                            0x0834
                        }, 

                        Package (0x02)
                        {
                            "AAPL,current-extra", 
                            0x0A8C
                        }, 

                        Package (0x02)
                        {
                            "AAPL,current-extra-in-sleep", 
                            0x0A8C
                        }, 

                        Package (0x02)
                        {
                            "AAPL,max-port-current-in-sleep", 
                            0x0834
                        }, 

                        Package (0x02)
                        {
                            "kUSBSleepPortCurrentLimit", 
                            0x0834
                        }, 

                        Package (0x02)
                        {
                            "kUSBWakePortCurrentLimit", 
                            0x0834
                        }, 

                        Package (0x02)
                        {
                            "kUSBSleepSupported", 
                            "true"
                        }, 

                        Buffer (One)
                        {
                             0x00                                             // .
                        }
                    }
                })
            }

            Device (XDCI)
            {
                Name (_ADR, 0x00140001)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x0D, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x0D, 
                            0x03
                        })
                    }
                }
            }

            Device (IMEI)
            {
                Name (_ADR, 0x00160000)  // _ADR: Address
                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x04)
                    {
                        Package (0x02)
                        {
                            "device_type", 
                            "Communications Controller"
                        }, 

                        Package (0x02)
                        {
                            "device-id", 
                            Buffer (0x04)
                            {
                                 0xBA, 0xA3, 0x00, 0x00                           // ....
                            }
                        }, 

                        Package (0x02)
                        {
                            "model", 
                            "Intel Corporation, Series Chipset Family IMEI Host Controller"
                        }, 

                        Package (0x02)
                        {
                            "pcidebug", 
                            "0:22:0"
                        }
                    }
                })
            }

            Device (SATA)
            {
                Name (_ADR, 0x00170000)  // _ADR: Address
            }

            Device (LPCB)
            {
                Name (_ADR, 0x001F0000)  // _ADR: Address
                OperationRegion (SMIE, SystemIO, PMBA, 0x04)
                Field (SMIE, ByteAcc, NoLock, Preserve)
                {
                        ,   10, 
                    RTCS,   1
                }

                OperationRegion (SLPR, SystemIO, SMCR, 0x08)
                Field (SLPR, ByteAcc, NoLock, Preserve)
                {
                        ,   4, 
                    SLPE,   1, 
                        ,   31, 
                    SLPX,   1
                }

                Method (SPTS, 1, NotSerialized)
                {
                    SLPE = One
                    SLPX = One
                }

                Method (SWAK, 1, NotSerialized)
                {
                    SLPE = Zero
                    If (RTCS){}
                    Notify (PWRB, 0x02) // Device Wake
                }

                Device (DMAC)
                {
                    Name (_HID, EisaId ("PNP0200") /* PC-class DMA Controller */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0000,             // Range Minimum
                            0x0000,             // Range Maximum
                            0x01,               // Alignment
                            0x20,               // Length
                            )
                        IO (Decode16,
                            0x0081,             // Range Minimum
                            0x0081,             // Range Maximum
                            0x01,               // Alignment
                            0x11,               // Length
                            )
                        IO (Decode16,
                            0x0093,             // Range Minimum
                            0x0093,             // Range Maximum
                            0x01,               // Alignment
                            0xD0,               // Length
                            )
                        IO (Decode16,
                            0x00C0,             // Range Minimum
                            0x00C0,             // Range Maximum
                            0x01,               // Alignment
                            0x20,               // Length
                            )
                        DMA (Compatibility, NotBusMaster, Transfer8_16, )
                            {4}
                    })
                }

                Device (EC)
                {
                    Name (_HID, EisaId ("PNP0C09") /* Embedded Controller Device */)  // _HID: Hardware ID
                    Name (_UID, One)  // _UID: Unique ID
                    Name (_STA, Zero)  // _STA: Status
                }

                Device (FWHD)
                {
                    Name (_HID, EisaId ("INT0800") /* Intel 82802 Firmware Hub Device */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        Memory32Fixed (ReadOnly,
                            0xFF000000,         // Address Base
                            0x01000000,         // Address Length
                            )
                    })
                }

                Device (HPET)
                {
                    Name (_HID, EisaId ("PNP0103") /* HPET System Timer */)  // _HID: Hardware ID
                    Name (_CID, EisaId ("PNP0C01") /* System Board */)  // _CID: Compatible ID
                    Name (_STA, 0x0F)  // _STA: Status
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IRQNoFlags ()
                            {0}
                        IRQNoFlags ()
                            {8}
                        IRQNoFlags ()
                            {11}
                        Memory32Fixed (ReadWrite,
                            0xFED00000,         // Address Base
                            0x00000400,         // Address Length
                            )
                    })
                }

                Device (IPIC)
                {
                    Name (_HID, EisaId ("PNP0000") /* 8259-compatible Programmable Interrupt Controller */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0020,             // Range Minimum
                            0x0020,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0024,             // Range Minimum
                            0x0024,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0028,             // Range Minimum
                            0x0028,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x002C,             // Range Minimum
                            0x002C,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0030,             // Range Minimum
                            0x0030,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0034,             // Range Minimum
                            0x0034,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0038,             // Range Minimum
                            0x0038,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x003C,             // Range Minimum
                            0x003C,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00A0,             // Range Minimum
                            0x00A0,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00A4,             // Range Minimum
                            0x00A4,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00A8,             // Range Minimum
                            0x00A8,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00AC,             // Range Minimum
                            0x00AC,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00B0,             // Range Minimum
                            0x00B0,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00B4,             // Range Minimum
                            0x00B4,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00B8,             // Range Minimum
                            0x00B8,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x00BC,             // Range Minimum
                            0x00BC,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x04D0,             // Range Minimum
                            0x04D0,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IRQNoFlags ()
                            {2}
                    })
                }

                Device (LDRC)
                {
                    Name (_HID, EisaId ("PNP0C02") /* PNP Motherboard Resources */)  // _HID: Hardware ID
                    Name (_UID, 0x02)  // _UID: Unique ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x002E,             // Range Minimum
                            0x002E,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x004E,             // Range Minimum
                            0x004E,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0061,             // Range Minimum
                            0x0061,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0063,             // Range Minimum
                            0x0063,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0065,             // Range Minimum
                            0x0065,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0067,             // Range Minimum
                            0x0067,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0070,             // Range Minimum
                            0x0070,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0080,             // Range Minimum
                            0x0080,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0092,             // Range Minimum
                            0x0092,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x00B2,             // Range Minimum
                            0x00B2,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                        IO (Decode16,
                            0x0680,             // Range Minimum
                            0x0680,             // Range Maximum
                            0x01,               // Alignment
                            0x20,               // Length
                            )
                        IO (Decode16,
                            0x164E,             // Range Minimum
                            0x164E,             // Range Maximum
                            0x01,               // Alignment
                            0x02,               // Length
                            )
                    })
                }

                Device (MATH)
                {
                    Name (_HID, EisaId ("PNP0C04") /* x87-compatible Floating Point Processing Unit */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x00FF,             // Range Minimum
                            0x00FF,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IRQNoFlags ()
                            {13}
                    })
                }

                Device (PS2K)
                {
                    Name (_HID, EisaId ("PNP030B"))  // _HID: Hardware ID
                    Name (_CID, EisaId ("PNP0303") /* IBM Enhanced Keyboard (101/102-key, PS/2 Mouse) */)  // _CID: Compatible ID
                    Name (_UID, One)  // _UID: Unique ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0061,             // Range Minimum
                            0x0061,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0064,             // Range Minimum
                            0x0064,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IRQNoFlags ()
                            {1}
                    })
                    Name (_PRS, ResourceTemplate ()  // _PRS: Possible Resource Settings
                    {
                        StartDependentFn (0x00, 0x00)
                        {
                            IO (Decode16,
                                0x0060,             // Range Minimum
                                0x0060,             // Range Maximum
                                0x01,               // Alignment
                                0x01,               // Length
                                )
                            IO (Decode16,
                                0x0064,             // Range Minimum
                                0x0064,             // Range Maximum
                                0x01,               // Alignment
                                0x01,               // Length
                                )
                            IRQNoFlags ()
                                {1}
                        }
                        EndDependentFn ()
                    })
                    Name (_PRW, Package (0x02)  // _PRW: Power Resources for Wake
                    {
                        0x09, 
                        0x04
                    })
                }

                Device (PS2M)
                {
                    Name (_HID, EisaId ("PNP0F03") /* Microsoft PS/2-style Mouse */)  // _HID: Hardware ID
                    Name (_UID, Zero)  // _UID: Unique ID
                    Name (LDN, One)
                    Name (_CID, EisaId ("PNP0F13") /* PS/2 Mouse */)  // _CID: Compatible ID
                    Name (CRS1, ResourceTemplate ()
                    {
                        IRQNoFlags ()
                            {12}
                    })
                    Name (CRS2, ResourceTemplate ()
                    {
                        IO (Decode16,
                            0x0060,             // Range Minimum
                            0x0060,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IO (Decode16,
                            0x0064,             // Range Minimum
                            0x0064,             // Range Maximum
                            0x01,               // Alignment
                            0x01,               // Length
                            )
                        IRQNoFlags ()
                            {12}
                    })
                    Method (_CRS, 0, NotSerialized)  // _CRS: Current Resource Settings
                    {
                        If ((IOST & 0x0400))
                        {
                            Return (CRS1) /* \_SB_.PCI0.LPCB.PS2M.CRS1 */
                        }
                        Else
                        {
                            Return (CRS2) /* \_SB_.PCI0.LPCB.PS2M.CRS2 */
                        }
                    }

                    Name (_PRS, ResourceTemplate ()  // _PRS: Possible Resource Settings
                    {
                        StartDependentFn (0x00, 0x00)
                        {
                            IRQNoFlags ()
                                {12}
                        }
                        EndDependentFn ()
                    })
                    Name (_PRW, Package (0x02)  // _PRW: Power Resources for Wake
                    {
                        0x09, 
                        0x04
                    })
                }

                Device (RTC)
                {
                    Name (_HID, EisaId ("PNP0B00") /* AT Real-Time Clock */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0070,             // Range Minimum
                            0x0070,             // Range Maximum
                            0x01,               // Alignment
                            0x08,               // Length
                            )
                        IRQNoFlags ()
                            {8}
                    })
                    OperationRegion (CMS0, SystemCMOS, Zero, 0x40)
                    Field (CMS0, ByteAcc, NoLock, Preserve)
                    {
                    }
                }

                Device (TIMR)
                {
                    Name (_HID, EisaId ("PNP0100") /* PC-class System Timer */)  // _HID: Hardware ID
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0040,             // Range Minimum
                            0x0040,             // Range Maximum
                            0x01,               // Alignment
                            0x04,               // Length
                            )
                        IO (Decode16,
                            0x0050,             // Range Minimum
                            0x0050,             // Range Maximum
                            0x10,               // Alignment
                            0x04,               // Length
                            )
                        IRQNoFlags ()
                            {0}
                    })
                }

                Device (ALS0)
                {
                    Name (_HID, "ACPI0008" /* Ambient Light Sensor Device */)  // _HID: Hardware ID
                    Name (_CID, "smc-als")  // _CID: Compatible ID
                    Name (_ALI, 0x012C)  // _ALI: Ambient Light Illuminance
                    Name (_ALR, Package (0x01)  // _ALR: Ambient Light Response
                    {
                        Package (0x02)
                        {
                            0x64, 
                            0x012C
                        }
                    })
                }

                Device (CWDT)
                {
                    Name (_HID, EisaId ("INT3F0D") /* ACPI Motherboard Resources */)  // _HID: Hardware ID
                    Name (_CID, EisaId ("PNP0C01") /* System Board */)  // _CID: Compatible ID
                    Name (_STA, 0x0F)  // _STA: Status
                    Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
                    {
                        IO (Decode16,
                            0x0000,             // Range Minimum
                            0x0000,             // Range Maximum
                            0x04,               // Alignment
                            0x04,               // Length
                            )
                    })
                }

                Device (ARTC)
                {
                    Name (_HID, "ACPI000E" /* Time and Alarm Device */)  // _HID: Hardware ID
                    Method (_GCP, 0, NotSerialized)  // _GCP: Get Capabilities
                    {
                        Return (0x05)
                    }
                }
            }

            Device (HDEF)
            {
                Name (_ADR, 0x001F0003)  // _ADR: Address
                OperationRegion (HDAR, PCI_Config, Zero, 0x0100)
                Field (HDAR, DWordAcc, NoLock, Preserve)
                {
                    VDID,   32
                }

                Field (HDAR, ByteAcc, NoLock, Preserve)
                {
                    Offset (0x54), 
                    Offset (0x55), 
                    PMEE,   1, 
                        ,   6, 
                    PMES,   1
                }

                Method (GPEH, 0, NotSerialized)
                {
                    If ((VDID == 0xFFFFFFFF))
                    {
                        Return (Zero)
                    }

                    If ((PMEE && PMES))
                    {
                        Debug = "HDEF GPEH"
                        PMES = One
                        Notify (HDEF, 0x02) // Device Wake
                    }
                }

                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x0C)
                    {
                        Package (0x02)
                        {
                            "layout-id", 
                            Buffer (0x04)
                            {
                                 0x0F, 0x00, 0x00, 0x00                           // ....
                            }
                        }, 

                        Package (0x02)
                        {
                            "type", 
                            "Audio Controller"
                        }, 

                        Package (0x02)
                        {
                            "hda-gfx", 
                            "onboard-1"
                        }, 

                        Package (0x02)
                        {
                            "device-id", 
                            Buffer (0x04)
                            {
                                 0xF0, 0xA3, 0x00, 0x00                           // ....
                            }
                        }, 

                        Package (0x02)
                        {
                            "AAPL,slot-name", 
                            "Built In"
                        }, 

                        Package (0x02)
                        {
                            "MaximumBeepBootVolume", 
                            Buffer (0x04)
                            {
                                 0x7F, 0x00, 0x00, 0x00                           // ....
                            }
                        }, 

                        Package (0x02)
                        {
                            "pci-debug", 
                            "0:31:3"
                        }
                    }
                })
            }

            Device (GLAN)
            {
                Name (_ADR, 0x001F0006)  // _ADR: Address
                OperationRegion (GLBA, PCI_Config, Zero, 0x0100)
                Field (GLBA, AnyAcc, NoLock, Preserve)
                {
                    DVID,   16, 
                    Offset (0xCC), 
                    Offset (0xCD), 
                    PMEE,   1, 
                        ,   6, 
                    PMES,   1
                }

                Method (GPEH, 0, NotSerialized)
                {
                    If ((DVID == 0xFFFF))
                    {
                        Return (Zero)
                    }

                    If ((PMEE && PMES))
                    {
                        PMES = One
                        Notify (GLAN, 0x02) // Device Wake
                    }
                }
            }

            Device (RP01)
            {
                Name (_ADR, 0x001C0004)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (PXSX)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP05)
            {
                Name (_ADR, 0x001C0000)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (GIGE)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP08)
            {
                Name (_ADR, 0x001C0007)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x13
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x12
                    }
                })
                Device (ARPT)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP09)
            {
                Name (_ADR, 0x001D0000)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (PXSX)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP13)
            {
                Name (_ADR, 0x001D0004)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (PXSX)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP17)
            {
                Name (_ADR, 0x001B0000)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (SSD0)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (RP21)
            {
                Name (_ADR, 0x001B0004)  // _ADR: Address
                Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                {
                    If (OSDW ())
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x04
                        })
                    }
                    Else
                    {
                        Return (Package (0x02)
                        {
                            0x09, 
                            0x03
                        })
                    }
                }

                Name (_PRT, Package (0x04)  // _PRT: PCI Routing Table
                {
                    Package (0x04)
                    {
                        0xFFFF, 
                        Zero, 
                        Zero, 
                        0x10
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        One, 
                        Zero, 
                        0x11
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x02, 
                        Zero, 
                        0x12
                    }, 

                    Package (0x04)
                    {
                        0xFFFF, 
                        0x03, 
                        Zero, 
                        0x13
                    }
                })
                Device (PXSX)
                {
                    Name (_ADR, Zero)  // _ADR: Address
                    Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
                    {
                        If (OSDW ())
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x04
                            })
                        }
                        Else
                        {
                            Return (Package (0x02)
                            {
                                0x09, 
                                0x03
                            })
                        }
                    }
                }
            }

            Device (SBUS)
            {
                Name (_ADR, 0x001F0004)  // _ADR: Address
                OperationRegion (SMBP, PCI_Config, 0x40, 0xC0)
                Field (SMBP, DWordAcc, NoLock, Preserve)
                {
                        ,   2, 
                    I2CE,   1
                }

                OperationRegion (SMPB, PCI_Config, 0x20, 0x04)
                Field (SMPB, DWordAcc, NoLock, Preserve)
                {
                        ,   5, 
                    SBAR,   11
                }

                OperationRegion (SMBI, SystemIO, (SBAR << 0x05), 0x10)
                Field (SMBI, ByteAcc, NoLock, Preserve)
                {
                    HSTS,   8, 
                    Offset (0x02), 
                    HCON,   8, 
                    HCOM,   8, 
                    TXSA,   8, 
                    DAT0,   8, 
                    DAT1,   8, 
                    HBDR,   8, 
                    PECR,   8, 
                    RXSA,   8, 
                    SDAT,   16
                }

                Method (SSXB, 2, Serialized)
                {
                    If (STRT ())
                    {
                        Return (Zero)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = Arg0
                    HCOM = Arg1
                    HCON = 0x48
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (SRXB, 1, Serialized)
                {
                    If (STRT ())
                    {
                        Return (0xFFFF)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = (Arg0 | One)
                    HCON = 0x44
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (DAT0) /* \_SB_.PCI0.SBUS.DAT0 */
                    }

                    Return (0xFFFF)
                }

                Method (SWRB, 3, Serialized)
                {
                    If (STRT ())
                    {
                        Return (Zero)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = Arg0
                    HCOM = Arg1
                    HCON = 0x48
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (SRDB, 2, Serialized)
                {
                    If (STRT ())
                    {
                        Return (0xFFFF)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = (Arg0 | One)
                    HCOM = Arg1
                    HCON = 0x48
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (DAT0) /* \_SB_.PCI0.SBUS.DAT0 */
                    }

                    Return (0xFFFF)
                }

                Method (SWRW, 3, Serialized)
                {
                    If (STRT ())
                    {
                        Return (Zero)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = Arg0
                    HCOM = Arg1
                    DAT1 = (Arg2 & 0xFF)
                    DAT0 = ((Arg2 >> Zero) & 0xFF)
                    HCON = 0x4C
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (SRDW, 2, Serialized)
                {
                    If (STRT ())
                    {
                        Return (0xFFFF)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = (Arg0 | One)
                    HCOM = Arg1
                    HCON = 0x4C
                    If (COMP ())
                    {
                        HSTS = 0xFF
                        Return (((DAT0 << 0x08) | DAT1))
                    }

                    Return (0xFFFFFFFF)
                }

                Method (SBLW, 4, Serialized)
                {
                    If (STRT ())
                    {
                        Return (Zero)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = Arg0
                    HCOM = Arg1
                    DAT0 = SizeOf (Arg2)
                    Local1 = Zero
                    HBDR = DerefOf (Arg2 [Zero])
                    HCON = 0x54
                    While ((SizeOf (Arg2) > Local1))
                    {
                        Local0 = 0x4E20
                        While ((!(HSTS & 0x80) && Local0))
                        {
                            Local0--
                        }

                        If (!Local0)
                        {
                            KILL ()
                            Return (One)
                        }

                        Local1++
                        If ((SizeOf (Arg2) > Local1))
                        {
                            HBDR = DerefOf (Arg2 [Local1])
                            HSTS = 0x80
                        }
                    }

                    HSTS = 0x80
                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (One)
                    }

                    Return (Zero)
                }

                Method (SBLR, 3, Serialized)
                {
                    Name (TBUF, Buffer (0x0100){})
                    If (STRT ())
                    {
                        Return (Zero)
                    }

                    I2CE = Zero
                    HSTS = 0xBF
                    TXSA = (Arg0 | One)
                    HCOM = Arg1
                    HCON = 0x54
                    Local0 = 0x0FA0
                    While ((!(HSTS & 0x80) && Local0))
                    {
                        Local0--
                        Stall (0x32)
                    }

                    If (!Local0)
                    {
                        KILL ()
                        Return (Zero)
                    }

                    TBUF [Zero] = DAT0 /* \_SB_.PCI0.SBUS.DAT0 */
                    HSTS = 0x80
                    Local1 = One
                    While ((Local1 < DerefOf (TBUF [Zero])))
                    {
                        Local0 = 0x0FA0
                        While ((!(HSTS & 0x80) && Local0))
                        {
                            Local0--
                            Stall (0x32)
                        }

                        If (!Local0)
                        {
                            KILL ()
                            Return (Zero)
                        }

                        TBUF [Local1] = HBDR /* \_SB_.PCI0.SBUS.HBDR */
                        HSTS = 0x80
                        Local1++
                    }

                    If (COMP ())
                    {
                        HSTS |= 0xFF
                        Return (TBUF) /* \_SB_.PCI0.SBUS.SBLR.TBUF */
                    }

                    Return (Zero)
                }

                Method (STRT, 0, Serialized)
                {
                    Local0 = 0xC8
                    While (Local0)
                    {
                        If ((HSTS & 0x40))
                        {
                            Local0--
                            Sleep (One)
                            If ((Local0 == Zero))
                            {
                                Return (One)
                            }
                        }
                        Else
                        {
                            Local0 = Zero
                        }
                    }

                    Local0 = 0x0FA0
                    While (Local0)
                    {
                        If ((HSTS & One))
                        {
                            Local0--
                            Stall (0x32)
                            If ((Local0 == Zero))
                            {
                                KILL ()
                            }
                        }
                        Else
                        {
                            Return (Zero)
                        }
                    }

                    Return (One)
                }

                Method (COMP, 0, Serialized)
                {
                    Local0 = 0x0FA0
                    While (Local0)
                    {
                        If ((HSTS & 0x02))
                        {
                            Return (One)
                        }
                        Else
                        {
                            Local0--
                            Stall (0x32)
                            If ((Local0 == Zero))
                            {
                                KILL ()
                            }
                        }
                    }

                    Return (Zero)
                }

                Method (KILL, 0, Serialized)
                {
                    HCON |= 0x02
                    HSTS |= 0xFF
                }

                Device (BUS0)
                {
                    Name (_CID, "smbus")  // _CID: Compatible ID
                    Name (_ADR, Zero)  // _ADR: Address
                    Device (MKY0)
                    {
                        Name (_CID, "mikey")  // _CID: Compatible ID
                        Name (_ADR, Zero)  // _ADR: Address
                        Method (_DSM, 4, NotSerialized)  // _DSM: Device-Specific Method
                        {
                            If ((Arg0 == ToUUID ("a0b5b7c6-1318-441c-b0c9-fe695eaf949b") /* Unknown UUID */))
                            {
                                Local0 = Package (0x0C)
                                    {
                                        "address", 
                                        0x39, 
                                        "device-id", 
                                        0x0CCB, 
                                        "device-id", 
                                        0x0CD2, 
                                        "ramp-control-address", 
                                        0x3B, 
                                        "resprg", 
                                        0x03, 
                                        "hdet", 
                                        One
                                    }
                                DTGP (Arg0, Arg1, Arg2, Arg3, RefOf (Local0))
                                Return (Local0)
                            }

                            Method (H1EN, 1, Serialized)
                            {
                                If ((Arg0 <= One))
                                {
                                    If ((Arg0 == One))
                                    {
                                        Local0 = (GGOV (0x01060015) | One)
                                        SGOV (0x01060015, Local0)
                                    }
                                    Else
                                    {
                                        Local0 = (GGOV (0x01060015) & Zero)
                                        SGOV (0x01060015, Local0)
                                    }
                                }
                            }

                            Method (H1IL, 0, Serialized)
                            {
                                Return (GGOV (0x01060017))
                            }

                            Method (H1IP, 1, Serialized)
                            {
                                Local0 = Arg0
                                If ((Arg0 <= One))
                                {
                                    Arg0 = ~Arg0
                                    SGII (0x01060017, Arg0)
                                }
                            }

                            Name (H1IN, 0x37)
                            Scope (\_GPE)
                            {
                                Name (MINV, Zero)
                                Method (_L37, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
                                {
                                    If (OSDW ())
                                    {
                                        Notify (\_SB.PCI0.SBUS.BUS0.MKY0, 0x80) // Status Change
                                    }
                                    Else
                                    {
                                        MINV = \_SB.GGII (0x01060017)
                                        If (MINV)
                                        {
                                            \_SB.SGII (0x01060017, Zero)
                                        }
                                        Else
                                        {
                                            \_SB.SGII (0x01060017, One)
                                        }

                                        Notify (\_SB.PWRB, 0x02) // Device Wake
                                    }
                                }
                            }

                            Method (P1IL, 0, Serialized)
                            {
                                Return (GGIV (0x01060016))
                            }

                            Method (P1IP, 1, Serialized)
                            {
                                If ((Arg0 <= One))
                                {
                                    Arg0 = ~Arg0
                                    SGII (0x01060016, Arg0)
                                }
                            }

                            Name (P1IN, 0x36)
                            Scope (\_GPE)
                            {
                                Method (_L36, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
                                {
                                    Local0 = (\_SB.GGII (0x01060016) ^ One)
                                    \_SB.SGII (0x01060016, Local0)
                                    If (OSDW ())
                                    {
                                        Notify (\_SB.PCI0.SBUS.BUS0.MKY0, 0x81) // Information Change
                                    }
                                    Else
                                    {
                                        Notify (\_SB.PWRB, 0x02) // Device Wake
                                    }
                                }
                            }
                        }
                    }

                    Device (DVL0)
                    {
                        Name (_CID, "diagsvault")  // _CID: Compatible ID
                        Name (_ADR, Zero)  // _ADR: Address
                        Method (_DSM, 4, NotSerialized)  // _DSM: Device-Specific Method
                        {
                            If ((Arg0 == ToUUID ("a0b5b7c6-1318-441c-b0c9-fe695eaf949b") /* Unknown UUID */))
                            {
                                Local0 = Package (0x04)
                                    {
                                        "address", 
                                        0x39, 
                                        "device-id", 
                                        0x0CCB
                                    }
                                DTGP (Arg0, Arg1, Arg2, Arg3, RefOf (Local0))
                                Return (Local0)
                            }
                        }
                    }

                    Device (BLC0)
                    {
                        Name (_ADR, Zero)  // _ADR: Address
                        Name (_CID, "smbus-blc")  // _CID: Compatible ID
                        OperationRegion (BLCM, SystemMemory, BLCB, 0x0100)
                        Field (BLCM, AnyAcc, NoLock, Preserve)
                        {
                            CSIZ,   8, 
                            CBUF,   112
                        }

                        Method (_DSM, 4, NotSerialized)  // _DSM: Device-Specific Method
                        {
                            Local0 = Package (0x12)
                                {
                                    "refnum", 
                                    Zero, 
                                    "address", 
                                    BLCP, 
                                    "command", 
                                    BLCC, 
                                    "type", 
                                    BLCT, 
                                    "version", 
                                    0x02, 
                                    "fault-off", 
                                    0x03, 
                                    "fault-len", 
                                    0x04, 
                                    "skey", 
                                    0x4C445342, 
                                    "smask", 
                                    0xFF
                                }
                            DTGP (Arg0, Arg1, Arg2, Arg3, RefOf (Local0))
                            Return (Local0)
                        }

                        Method (_STA, 0, NotSerialized)  // _STA: Status
                        {
                            If (OSDW ())
                            {
                                Return (0x0F)
                            }
                            Else
                            {
                                Return (0x0B)
                            }
                        }

                        Method (BSET, 1, Serialized)
                        {
                            If (!BLCP)
                            {
                                Return (Zero)
                            }

                            If ((Arg0 <= Zero))
                            {
                                Local0 = Zero
                            }
                            ElseIf ((Arg0 > 0x64))
                            {
                                Local0 = 0xFFFF
                            }
                            Else
                            {
                                Local0 = (0x028F * Arg0)
                            }

                            If ((BLCT == 0x4D434353))
                            {
                                Name (BUFR, Buffer (0x06){})
                                CreateByteField (BUFR, Zero, SIZE)
                                CreateByteField (BUFR, One, VSET)
                                CreateByteField (BUFR, 0x02, VOPC)
                                CreateByteField (BUFR, 0x03, VALH)
                                CreateByteField (BUFR, 0x04, VALL)
                                CreateByteField (BUFR, 0x05, CKSM)
                                SIZE = 0x84
                                VSET = 0x03
                                VOPC = 0x10
                                VALH = (Local0 >> 0x08)
                                VALL = (Local0 & 0xFF)
                                CKSM ^= VALH /* \_SB_.PCI0.SBUS.BUS0.BLC0.BSET.VALH */
                                CKSM ^= VALL /* \_SB_.PCI0.SBUS.BUS0.BLC0.BSET.VALL */
                                SBLW (BLCP, BLCC, BUFR, One)
                                Return (Zero)
                            }

                            If ((BLCT == 0x49324300))
                            {
                                SWRW ((BLCP << One), BLCC, Local0)
                            }

                            Local0 = ((Local0 >> 0x08) & 0xFF)
                            If ((Local0 != LDSB))
                            {
                                LDSB = Local0
                            }

                            Return (Zero)
                        }

                        Method (BCAL, 0, Serialized)
                        {
                            If (!BLCP)
                            {
                                Return (Zero)
                            }

                            If (((BLCT == 0x4D434353) && CSIZ))
                            {
                                SBLW (BLCP, BLCC, ToBuffer (CBUF), One)
                            }

                            Return (Zero)
                        }

                        Name (_GPE, 0x29)  // _GPE: General Purpose Events
                    }
                }

                Device (BUS1)
                {
                    Name (_CID, "smbus")  // _CID: Compatible ID
                    Name (_ADR, One)  // _ADR: Address
                }
            }

            Device (XSPI)
            {
                Name (_ADR, 0x001F0005)  // _ADR: Address
                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x02)
                    {
                        "pci-device-hidden", 
                        Buffer (0x08)
                        {
                             0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // ........
                        }
                    }
                })
            }

            Device (I2C2)
            {
                Name (_ADR, 0x00150002)  // _ADR: Address
                Name (_UID, 0x03)  // _UID: Unique ID
                Name (RBUF, ResourceTemplate ()
                {
                    Interrupt (ResourceConsumer, Level, ActiveLow, Shared, ,, )
                    {
                        0x00000012,
                    }
                })
                Method (_STA, 0, NotSerialized)  // _STA: Status
                {
                    Return (0x0F)
                }

                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x03)
                    {
                        Package (0x02)
                        {
                            "i2c-channel-number", 
                            Buffer (0x07)
                            {
                                 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00         // .......
                            }
                        }, 

                        Package (0x02)
                        {
                            "i2c-pin-sda", 
                            Buffer (0x08)
                            {
                                 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00         // .......
                            }
                        }, 

                        Package (0x02)
                        {
                            "i2c-pin-scl", 
                            Buffer (0x07)
                            {
                                 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00         // .......
                            }
                        }
                    }
                })
                Method (_CRS, 0, NotSerialized)  // _CRS: Current Resource Settings
                {
                    Return (RBUF) /* \_SB_.PCI0.I2C2.RBUF */
                }
            }

            Device (SPI1)
            {
                Name (_ADR, 0x001E0003)  // _ADR: Address
                Name (_DDN, "Intel Low Power SubSystem SPI Host Controller - 9D2A")  // _DDN: DOS Device Name
                Name (_UID, 0x02)  // _UID: Unique ID
                Name (CSST, 0x28)
                Name (CSHT, 0x0A)
                Name (RBUF, ResourceTemplate ()
                {
                    Interrupt (ResourceConsumer, Level, ActiveLow, Shared, ,, )
                    {
                        0x00000017,
                    }
                })
                Method (_STA, 0, NotSerialized)  // _STA: Status
                {
                    Return (0x0F)
                }

                Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
                {
                    ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                    Package (0x07)
                    {
                        Package (0x02)
                        {
                            "gspi-channel-number", 
                            Buffer (0x08)
                            {
                                 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // ........
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-channels-count", 
                            Buffer (0x08)
                            {
                                 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // ........
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-sys-clock-period", 
                            Buffer (0x08)
                            {
                                 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // ........
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-pin-cs", 
                            Buffer (0x08)
                            {
                                 0x57, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // W.......
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-pin-clk", 
                            Buffer (0x08)
                            {
                                 0x58, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // X.......
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-pin-mosi", 
                            Buffer (0x08)
                            {
                                 0x59, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // Y.......
                            }
                        }, 

                        Package (0x02)
                        {
                            "gspi-pin-miso", 
                            Buffer (0x08)
                            {
                                 0x5A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00   // Z.......
                            }
                        }
                    }
                })
                Name (WBUF, Buffer (0x02)
                {
                     0x79, 0x00                                       // y.
                })
                Name (DBUF, ResourceTemplate ()
                {
                    FixedDMA (0x0010, 0x0006, Width32bit, )
                    FixedDMA (0x0011, 0x0007, Width32bit, )
                })
                Method (_CRS, 0, NotSerialized)  // _CRS: Current Resource Settings
                {
                    If (_OSI ("Darwin"))
                    {
                        Return (WBUF) /* \_SB_.PCI0.SPI1.WBUF */
                    }

                    Return (ConcatenateResTemplate (RBUF, DBUF))
                }
            }
        }

        Device (PWRB)
        {
            Name (_HID, EisaId ("PNP0C0C") /* Power Button Device */)  // _HID: Hardware ID
            Name (_UID, 0xAA)  // _UID: Unique ID
            Method (_PRW, 0, NotSerialized)  // _PRW: Power Resources for Wake
            {
                If (OSDW ())
                {
                    Return (Package (0x02)
                    {
                        0x6D, 
                        0x04
                    })
                }
                Else
                {
                    Return (Package (0x02)
                    {
                        0x6D, 
                        0x03
                    })
                }
            }
        }

        Device (BC00)
        {
            Name (_ADR, Zero)  // _ADR: Address
        }

        Device (BC01)
        {
            Name (_ADR, One)  // _ADR: Address
        }
    }

    Scope (_SB)
    {
        Processor (PR00, 0x01, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, Zero)  // _UID: Unique ID
            Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
            {
                ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                Package (0x02)
                {
                    Package (0x02)
                    {
                        "plugin-type", 
                        One
                    }
                }
            })
        }

        Processor (PR01, 0x02, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, One)  // _UID: Unique ID
        }

        Processor (PR02, 0x03, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x02)  // _UID: Unique ID
        }

        Processor (PR03, 0x04, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x03)  // _UID: Unique ID
        }

        Processor (PR04, 0x05, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x04)  // _UID: Unique ID
        }

        Processor (PR05, 0x06, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x05)  // _UID: Unique ID
        }

        Processor (PR06, 0x07, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x06)  // _UID: Unique ID
        }

        Processor (PR07, 0x08, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x07)  // _UID: Unique ID
        }

        Processor (PR08, 0x09, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x08)  // _UID: Unique ID
        }

        Processor (PR09, 0x0A, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x09)  // _UID: Unique ID
        }

        Processor (PR10, 0x0B, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x10)  // _UID: Unique ID
        }

        Processor (PR11, 0x0C, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x11)  // _UID: Unique ID
        }

        Processor (PR12, 0x0D, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x12)  // _UID: Unique ID
        }

        Processor (PR13, 0x0E, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x13)  // _UID: Unique ID
        }

        Processor (PR14, 0x0F, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x14)  // _UID: Unique ID
        }

        Processor (PR15, 0x10, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x15)  // _UID: Unique ID
        }

        Processor (PR16, 0x11, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x16)  // _UID: Unique ID
        }

        Processor (PR17, 0x12, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x17)  // _UID: Unique ID
        }

        Processor (PR18, 0x13, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x18)  // _UID: Unique ID
        }

        Processor (PR19, 0x14, 0x00001810, 0x06)
        {
            Name (_HID, "ACPI0007" /* Processor Device */)  // _HID: Hardware ID
            Name (_UID, 0x19)  // _UID: Unique ID
        }
    }

    Scope (_SB.PCI0)
    {
        Device (PDRC)
        {
            Name (_HID, EisaId ("PNP0C02") /* PNP Motherboard Resources */)  // _HID: Hardware ID
            Name (_UID, One)  // _UID: Unique ID
            Name (_CRS, ResourceTemplate ()  // _CRS: Current Resource Settings
            {
                Memory32Fixed (ReadWrite,
                    0xFED1C000,         // Address Base
                    0x00004000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED10000,         // Address Base
                    0x00008000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED18000,         // Address Base
                    0x00001000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED19000,         // Address Base
                    0x00001000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED20000,         // Address Base
                    0x00020000,         // Address Length
                    )
                Memory32Fixed (ReadOnly,
                    0xFED90000,         // Address Base
                    0x00004000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED45000,         // Address Base
                    0x0004B000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xF8000000,         // Address Base
                    0x04000000,         // Address Length
                    )
                Memory32Fixed (ReadOnly,
                    0xFF000000,         // Address Base
                    0x01000000,         // Address Length
                    )
                Memory32Fixed (ReadOnly,
                    0xFFE00000,         // Address Base
                    0x00100000,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED00000,         // Address Base
                    0x00000400,         // Address Length
                    )
                Memory32Fixed (ReadWrite,
                    0xFED1F404,         // Address Base
                    0x00001000,         // Address Length
                    )
            })
        }
    }

    Scope (\)
    {
        OperationRegion (IO_D, SystemIO, 0x0800, 0x08)
        Field (IO_D, ByteAcc, NoLock, Preserve)
        {
            TRPD,   8
        }

        OperationRegion (IO_H, SystemIO, 0x0810, 0x08)
        Field (IO_H, ByteAcc, NoLock, Preserve)
        {
            TRPH,   8
        }

        OperationRegion (IO_P, SystemIO, 0x0810, 0x08)
        Field (IO_P, ByteAcc, NoLock, Preserve)
        {
            TRPF,   8
        }

        OperationRegion (PMIO, SystemIO, PMBA, 0x80)
        Field (PMIO, ByteAcc, NoLock, Preserve)
        {
                ,   17, 
            GPEC,   1
        }
    }

    Mutex (MUTX, 0x00)
    OperationRegion (PRT0, SystemIO, 0x80, 0x04)
    Field (PRT0, DWordAcc, NoLock, Preserve)
    {
        P80H,   32
    }

    Method (P8XH, 2, Serialized)
    {
        If ((Arg0 == Zero))
        {
            P80D = ((P80D & 0xFFFFFF00) | Arg1)
        }

        If ((Arg0 == One))
        {
            P80D = ((P80D & 0xFFFF00FF) | (Arg1 << 0x08))
        }

        If ((Arg0 == 0x02))
        {
            P80D = ((P80D & 0xFF00FFFF) | (Arg1 << 0x10))
        }

        If ((Arg0 == 0x03))
        {
            P80D = ((P80D & 0x00FFFFFF) | (Arg1 << 0x18))
        }

        P80H = P80D /* \P80D */
    }

    OperationRegion (SPRT, SystemIO, 0xB2, 0x02)
    Field (SPRT, ByteAcc, NoLock, Preserve)
    {
        SSMP,   8
    }

    Method (_PIC, 1, NotSerialized)  // _PIC: Interrupt Model
    {
        GPIC = Arg0
        PICM = Arg0
    }

    Method (GETB, 3, Serialized)
    {
        Local0 = (Arg0 * 0x08)
        Local1 = (Arg0 * 0x08)
        CreateField (Arg2, Local0, Local1, TBF3)
        Return (TBF3) /* \GETB.TBF3 */
    }

    Method (PNOT, 0, NotSerialized)
    {
        If ((TCNT > One))
        {
            If ((PDC0 & 0x08))
            {
                Notify (\_SB.PR00, 0x80) // Performance Capability Change
                If ((PDC0 & 0x10))
                {
                    Notify (\_SB.PR00, 0x81) // C-State Change
                }
            }

            If ((PDC1 & 0x08))
            {
                Notify (\_SB.PR01, 0x80) // Performance Capability Change
                If ((PDC1 & 0x10))
                {
                    Notify (\_SB.PR01, 0x81) // C-State Change
                }
            }

            If ((PDC2 & 0x08))
            {
                Notify (\_SB.PR02, 0x80) // Performance Capability Change
                If ((PDC2 & 0x10))
                {
                    Notify (\_SB.PR02, 0x81) // C-State Change
                }
            }

            If ((PDC3 & 0x08))
            {
                Notify (\_SB.PR03, 0x80) // Performance Capability Change
                If ((PDC3 & 0x10))
                {
                    Notify (\_SB.PR03, 0x81) // C-State Change
                }
            }

            If ((PDC4 & 0x08))
            {
                Notify (\_SB.PR04, 0x80) // Performance Capability Change
                If ((PDC4 & 0x10))
                {
                    Notify (\_SB.PR04, 0x81) // C-State Change
                }
            }

            If ((PDC5 & 0x08))
            {
                Notify (\_SB.PR05, 0x80) // Performance Capability Change
                If ((PDC5 & 0x10))
                {
                    Notify (\_SB.PR05, 0x81) // C-State Change
                }
            }

            If ((PDC6 & 0x08))
            {
                Notify (\_SB.PR06, 0x80) // Performance Capability Change
                If ((PDC6 & 0x10))
                {
                    Notify (\_SB.PR06, 0x81) // C-State Change
                }
            }

            If ((PDC7 & 0x08))
            {
                Notify (\_SB.PR07, 0x80) // Performance Capability Change
                If ((PDC7 & 0x10))
                {
                    Notify (\_SB.PR07, 0x81) // C-State Change
                }
            }
        }
        Else
        {
            Notify (\_SB.PR00, 0x80) // Performance Capability Change
            Notify (\_SB.PR00, 0x81) // C-State Change
        }
    }

    Method (TRAP, 2, Serialized)
    {
        SMIF = Arg1
        If ((Arg0 == One))
        {
            TRPH = Zero
        }

        If ((Arg0 == 0x02))
        {
            DTSF = One
            TRPD = Zero
            Return (DTSF) /* \DTSF */
        }

        If ((Arg0 == 0x03))
        {
            TRPF = Zero
        }

        Return (SMIF) /* \SMIF */
    }

    Scope (_SB)
    {
        Method (_INI, 0, NotSerialized)  // _INI: Initialize
        {
            PINI ()
        }

        Device (USBX)
        {
            Name (_ADR, Zero)  // _ADR: Address
            Name (_DSD, Package (0x02)  // _DSD: Device-Specific Data
            {
                ToUUID ("daffd814-6eba-4d8c-8a91-bc9bbf4aa301") /* Device Properties for _DSD */, 
                Package (0x04)
                {
                    Package (0x02)
                    {
                        "kUSBSleepPowerSupply", 
                        0x13EC
                    }, 

                    Package (0x02)
                    {
                        "kUSBSleepPortCurrentLimit", 
                        0x0834
                    }, 

                    Package (0x02)
                    {
                        "kUSBWakePowerSupply", 
                        0x13EC
                    }, 

                    Package (0x02)
                    {
                        "kUSBWakePortCurrentLimit", 
                        0x0834
                    }
                }
            })
        }

        Device (SLPB)
        {
            Name (_HID, EisaId ("PNP0C03"))  // _HID: Hardware ID
            Name (_STA, 0x0B)  // _STA: Status
        }

        Device (PNLF)
        {
            Name (_HID, EisaId ("APP0002"))  // _HID: Hardware ID
            Name (_CID, "backlight")  // _CID: Compatible ID
            Name (_UID, 0x0A)  // _UID: Unique ID
            Name (_STA, 0x0B)  // _STA: Status
            Name (_ADR, Zero)  // _ADR: Address
        }
    }

    Name (PNVB, 0xB6F2E018)
    Name (PNVL, 0x024C)
    OperationRegion (PNVA, SystemMemory, PNVB, PNVL)
    Field (PNVA, AnyAcc, Lock, Preserve)
    {
        PCHG,   16, 
        PCHS,   16, 
        RPA1,   32, 
        RPA5,   32, 
        RPA8,   32, 
        RPA9,   32, 
        RPAD,   32, 
        RPAH,   32, 
        RPAL,   32, 
        SBRG,   32, 
        GPEM,   32, 
        PML1,   16, 
        PML5,   16, 
        PML8,   16, 
        PML9,   16, 
        PMLD,   16, 
        PMLH,   16, 
        PMLL,   16, 
        PMLM,   16, 
        PMLN,   16, 
        PMLO,   16, 
        PNL1,   16, 
        PNL5,   16, 
        PNL8,   16, 
        PNL9,   16, 
        PNLD,   16, 
        PNLH,   16, 
        PNLL,   16, 
        PNLM,   16, 
        PNLN,   16, 
        PNLO,   16, 
        IM00,   8, 
        IM01,   8, 
        IM02,   8, 
        IM03,   8, 
        IM05,   8, 
        IC00,   64, 
        IC01,   64, 
        IC02,   64, 
        IC03,   64, 
        IC04,   64, 
        IC05,   64, 
        SM00,   8, 
        SM01,   8, 
        SC00,   64, 
        SC01,   64, 
        UA00,   8, 
        UA01,   8, 
        UA02,   8, 
        UOC0,   32, 
        UOC1,   32, 
        XHPC,   8, 
        XRPC,   8, 
        XSPC,   8, 
        XSPA,   8, 
        UM00,   8, 
        UM01,   8, 
        UM02,   8, 
        UC00,   64, 
        UC01,   64, 
        UC02,   64, 
        UD00,   8, 
        UD01,   8, 
        UD02,   8, 
        UP00,   8, 
        UP01,   8, 
        UP02,   8, 
        UI00,   8, 
        UI01,   8, 
        UI02,   8, 
        Offset (0x208), 
        SXRB,   32, 
        SXRS,   32, 
        CIOE,   8, 
        CIOI,   8, 
        TAEN,   8, 
        TIRQ,   8, 
        XWMB,   32, 
        ITA0,   16, 
        ITA1,   16, 
        ITA2,   16, 
        ITA3,   16, 
        ITS0,   8, 
        ITS1,   8, 
        ITS2,   8, 
        ITS3,   8, 
        CSKU,   8, 
        PMBS,   16, 
        PWRM,   32, 
        PSON,   8, 
        LTR1,   8, 
        LTR5,   8, 
        LTR8,   8, 
        LTR9,   8, 
        LTRD,   8, 
        LTRH,   8, 
        LTRL,   8, 
        LTRM,   8, 
        LTRN,   8, 
        LTRO,   8, 
        GPEN,   8, 
        SGIR,   8, 
        GBES,   8, 
        SPPR,   8, 
        RMRC,   32
    }

    Scope (_SB)
    {
        Name (GPCL, Package (0x0F)
        {
            Package (0x07)
            {
                0x006E0000, 
                0x19, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                Zero
            }, 

            Package (0x07)
            {
                0x006E0000, 
                0x1A, 
                0x0790, 
                0xB4, 
                0x30, 
                0x0144, 
                0x20
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x18, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                0x0100
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x18, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                0x60
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x18, 
                0x0780, 
                0xB4, 
                0x2C, 
                0x0144, 
                0x0120
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x18, 
                0x0790, 
                0xB4, 
                0x30, 
                0x0144, 
                0x80
            }, 

            Package (0x07)
            {
                0x006E0000, 
                0x08, 
                0x0930, 
                0xB8, 
                0x40, 
                0x0148, 
                0x40
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x18, 
                0x0910, 
                0xB8, 
                0x3C, 
                0x0148, 
                0xA0
            }, 

            Package (0x07)
            {
                0x006C0000, 
                0x10, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x28, 
                0x0A90, 
                0xBC, 
                0x48, 
                0x014C, 
                0xC0
            }, 

            Package (0x07)
            {
                0x006E0000, 
                0x09, 
                0x09B0, 
                0xBC, 
                0x44, 
                0x014C, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x08, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x0B, 
                0x0680, 
                0xB4, 
                0x24, 
                0xFFFF, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x09, 
                0x0900, 
                0xB8, 
                0x38, 
                0xFFFF, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x06, 
                0x0990, 
                0xBC, 
                0x40, 
                0x014C, 
                0xFFFF
            }
        })
        Name (GPCH, Package (0x11)
        {
            Package (0x07)
            {
                0x006E0000, 
                0x19, 
                0x0600, 
                0xC0, 
                0x20, 
                0x0140, 
                Zero
            }, 

            Package (0x07)
            {
                0x006E0000, 
                0x1A, 
                0x0790, 
                0xC4, 
                0x30, 
                0x0144, 
                0x20
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x18, 
                0x0600, 
                0xC0, 
                0x20, 
                0x0140, 
                0x40
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x18, 
                0x0780, 
                0xC4, 
                0x2C, 
                0x0144, 
                0x60
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x0D, 
                0x0900, 
                0xC8, 
                0x38, 
                0x0148, 
                0x0100
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x18, 
                0x09D0, 
                0xCC, 
                0x40, 
                0x014C, 
                0x0120
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x08, 
                0x0900, 
                0xC8, 
                0x38, 
                0x0148, 
                0x80
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x18, 
                0x0780, 
                0xC4, 
                0x2C, 
                0x0144, 
                0xE0
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x12, 
                0x0740, 
                0xC8, 
                0x30, 
                0x0148, 
                0x0140
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x0C, 
                0x0860, 
                0xCC, 
                0x3C, 
                0x014C, 
                0x0160
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x18, 
                0x0600, 
                0xC0, 
                0x20, 
                0x0140, 
                0xC0
            }, 

            Package (0x07)
            {
                0x006C0000, 
                0x10, 
                0x0600, 
                0xB0, 
                0x20, 
                0x0140, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x28, 
                0x0A00, 
                0xD0, 
                0x40, 
                0xFFFF, 
                0xA0
            }, 

            Package (0x07)
            {
                0x006B0000, 
                0x09, 
                0x0B50, 
                0xD0, 
                0x4C, 
                0xFFFF, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006D0000, 
                0x08, 
                0x0980, 
                0xCC, 
                0x3C, 
                0xFFFF, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x0B, 
                0x0600, 
                0xC0, 
                0x20, 
                0xFFFF, 
                0xFFFF
            }, 

            Package (0x07)
            {
                0x006A0000, 
                0x09, 
                0x06B0, 
                0xC4, 
                0x28, 
                0xFFFF, 
                0xFFFF
            }
        })
        Name (RXEV, Package (0x0D)
        {
            Buffer (0x10){}, 
            Buffer (0x1A){}, 
            Buffer (0x18){}, 
            Buffer (0x18){}, 
            Buffer (0x18){}, 
            Buffer (0x18){}, 
            Buffer (0x08){}, 
            Buffer (0x12){}, 
            Buffer (0x28){}, 
            Buffer (0x18){}, 
            Buffer (0x10){}, 
            Buffer (0x28){}
        })
    }

    Scope (_SB)
    {
        Method (GINF, 2, NotSerialized)
        {
            If ((PCHS == PCHL))
            {
                Return (DerefOf (DerefOf (GPCL [Arg0]) [Arg1]))
            }
            Else
            {
                Return (DerefOf (DerefOf (GPCH [Arg0]) [Arg1]))
            }
        }

        Method (GMXG, 0, NotSerialized)
        {
            If ((PCHS == PCHL))
            {
                Return (0x08)
            }
            Else
            {
                Return (0x0A)
            }
        }

        Method (GADR, 2, NotSerialized)
        {
            Local0 = (GINF (Arg0, Zero) + SBRG) /* \SBRG */
            Local1 = GINF (Arg0, Arg1)
            Return ((Local0 + Local1))
        }

        Method (GNUM, 1, NotSerialized)
        {
            Local0 = GNMB (Arg0)
            Local1 = GGRP (Arg0)
            Return ((Local0 + (Local1 * 0x18)))
        }

        Method (INUM, 1, NotSerialized)
        {
            Local1 = GNMB (Arg0)
            Local2 = GGRP (Arg0)
            Local3 = Zero
            While ((Local3 < Local2))
            {
                Local1 += GINF (Local3, One)
                Local3++
            }

            Return ((0x18 + (Local1 % 0x60)))
        }

        Method (GGRP, 1, Serialized)
        {
            Local0 = ((Arg0 & 0x00FF0000) >> 0x10)
            Return (Local0)
        }

        Method (GNMB, 1, Serialized)
        {
            Return ((Arg0 & 0xFFFF))
        }

        Method (GGPE, 1, NotSerialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            If ((((GPEM >> (Local0 * 0x02)) & 0x03) == 
                Zero))
            {
                Return (0x0F)
            }
            Else
            {
                Local2 = ((GPEM >> (Local0 * 0x02)) & 0x03)
                Return ((((Local2 - One) * 0x20) + Local1))
            }
        }

        Method (GPC0, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            Return (TEMP) /* \_SB_.GPC0.TEMP */
        }

        Method (SPC0, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            TEMP = Arg1
        }

        Method (GPC1, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = ((GADR (Local0, 0x02) + (Local1 * 0x08)) + 0x04)
            OperationRegion (PDW1, SystemMemory, Local2, 0x04)
            Field (PDW1, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            Return (TEMP) /* \_SB_.GPC1.TEMP */
        }

        Method (SPC1, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = ((GADR (Local0, 0x02) + (Local1 * 0x08)) + 0x04)
            OperationRegion (PDW1, SystemMemory, Local2, 0x04)
            Field (PDW1, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            TEMP = Arg1
        }

        Method (SRX0, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   28, 
                TEMP,   1, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (SGDI, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                Offset (0x01), 
                TEMP,   2, 
                Offset (0x04)
            }

            TEMP = One
        }

        Name (PCSA, Zero)
        Method (RXRA, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   28, 
                RXPO,   1, 
                    ,   1, 
                PADC,   2
            }

            If ((Arg1 == One))
            {
                PCSA = PADC /* \_SB_.RXRA.PADC */
                PADC = Zero
            }
            ElseIf ((PCSA != Zero))
            {
                PADC = PCSA /* \_SB_.PCSA */
            }

            RXPO = Arg1
        }

        Method (SGDO, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                Offset (0x01), 
                TEMP,   2, 
                Offset (0x04)
            }

            TEMP = 0x02
        }

        Method (GGIV, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   1, 
                TEMP,   1, 
                Offset (0x04)
            }

            Return (TEMP) /* \_SB_.GGIV.TEMP */
        }

        Method (GGOV, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                TEMP,   1, 
                Offset (0x04)
            }

            Return (TEMP) /* \_SB_.GGOV.TEMP */
        }

        Method (SGOV, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                TEMP,   1, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (GGII, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   23, 
                TEMP,   1, 
                Offset (0x04)
            }

            Return (TEMP) /* \_SB_.GGII.TEMP */
        }

        Method (SGII, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   23, 
                TEMP,   1, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (GPMV, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   10, 
                TEMP,   3, 
                Offset (0x04)
            }

            Return (TEMP) /* \_SB_.GPMV.TEMP */
        }

        Method (SPMV, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   10, 
                TEMP,   3, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (GHPO, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local3 = (GADR (Local0, 0x03) + ((Local1 >> 0x05) * 0x04))
            Local4 = (Local1 & 0x1F)
            OperationRegion (PREG, SystemMemory, Local3, 0x04)
            Field (PREG, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            Return (((TEMP >> Local4) & One))
        }

        Method (SHPO, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local3 = (GADR (Local0, 0x03) + ((Local1 >> 0x05) * 0x04))
            Local4 = (Local1 & 0x1F)
            OperationRegion (PREG, SystemMemory, Local3, 0x04)
            Field (PREG, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            If (Arg1)
            {
                TEMP |= (One << Local4)
            }
            Else
            {
                TEMP &= ~(One << Local4)
            }
        }

        Method (GGPO, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x04) + ((Local1 >> 0x03) * 0x04))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                TEMP,   32
            }

            Return (((TEMP >> ((Local1 & 0x07) * 0x04)) & 
                0x03))
        }

        Method (SGRA, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   20, 
                TEMP,   1, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (SGWP, 2, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = ((GADR (Local0, 0x02) + (Local1 * 0x08)) + 0x04)
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   10, 
                TEMP,   4, 
                Offset (0x04)
            }

            TEMP = Arg1
        }

        Method (UGPS, 0, Serialized)
        {
        }

        Method (CGPS, 0, Serialized)
        {
        }

        Method (CGLS, 0, Serialized)
        {
        }

        Method (CAGS, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local4 = ((Local1 >> 0x05) * 0x04)
            If ((((GPEM >> (Local0 * 0x02)) & 0x03) == 
                Zero))
            {
                OperationRegion (GPPX, SystemMemory, (GADR (Local0, 0x05) + Local4), 0x04)
                Field (GPPX, AnyAcc, NoLock, Preserve)
                {
                    STSX,   32
                }

                Local2 = (One << (Local1 % 0x20))
                STSX = Local2
            }
        }

        Method (ISME, 1, NotSerialized)
        {
            If ((((GPEM >> (Arg0 * 0x02)) & 0x03
                ) != Zero))
            {
                Return (Zero)
            }

            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x05) + ((Local1 >> 0x05) * 0x04))
            Local3 = (Local1 & 0x1F)
            OperationRegion (GPPX, SystemMemory, Local2, 0x24)
            Field (GPPX, AnyAcc, NoLock, Preserve)
            {
                STSX,   32, 
                Offset (0x20), 
                GENX,   32
            }

            Return ((((STSX & GENX) >> Local3) & One))
        }

        Method (DIPI, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   9, 
                RDIS,   1, 
                    ,   15, 
                RCFG,   2, 
                Offset (0x04)
            }

            If ((RCFG != 0x02))
            {
                DerefOf (RXEV [Local0]) [Local1] = RCFG /* \_SB_.DIPI.RCFG */
                RCFG = 0x02
                RDIS = One
            }
        }

        Method (UIPI, 1, Serialized)
        {
            Local0 = GGRP (Arg0)
            Local1 = GNMB (Arg0)
            Local2 = (GADR (Local0, 0x02) + (Local1 * 0x08))
            OperationRegion (PDW0, SystemMemory, Local2, 0x04)
            Field (PDW0, AnyAcc, NoLock, Preserve)
            {
                    ,   9, 
                RDIS,   1, 
                    ,   15, 
                RCFG,   2, 
                Offset (0x04)
            }

            Local3 = DerefOf (DerefOf (RXEV [Local0]) [Local1])
            If ((Local3 != 0x02))
            {
                RDIS = Zero
                RCFG = Local3
            }
        }

        Method (PSD3, 1, Serialized)
        {
        }

        Method (PSD0, 1, Serialized)
        {
        }
    }

    Scope (\)
    {
        Method (PCRR, 2, Serialized)
        {
            Local0 = ((Arg0 << 0x10) + Arg1)
            Local0 += SBRG /* \SBRG */
            OperationRegion (PCR0, SystemMemory, Local0, 0x04)
            Field (PCR0, DWordAcc, Lock, Preserve)
            {
                DAT0,   32
            }

            Return (DAT0) /* \PCRR.DAT0 */
        }

        Method (PCRW, 3, Serialized)
        {
            Local0 = ((Arg0 << 0x10) + Arg1)
            Local0 += SBRG /* \SBRG */
            OperationRegion (PCR0, SystemMemory, Local0, 0x04)
            Field (PCR0, DWordAcc, Lock, Preserve)
            {
                DAT0,   32
            }

            DAT0 = Arg2
            Local0 = PCRR (0xC7, 0x3418)
        }

        Method (PCR0, 3, Serialized)
        {
            Local0 = PCRR (Arg0, Arg1)
            Local1 = (Local0 | Arg2)
            PCRW (Arg0, Arg1, Local1)
        }

        Method (PCRA, 3, Serialized)
        {
            Local0 = PCRR (Arg0, Arg1)
            Local1 = (Local0 & Arg2)
            PCRW (Arg0, Arg1, Local1)
        }

        Method (PCAO, 4, Serialized)
        {
            Local0 = PCRR (Arg0, Arg1)
            Local1 = ((Local0 & Arg2) | Arg3)
            PCRW (Arg0, Arg1, Local1)
        }

        Name (TCBV, Zero)
        Method (TCBS, 0, NotSerialized)
        {
            If ((TCBV == Zero))
            {
                Local0 = PCRR (0xEF, 0x2778)
                TCBV = (Local0 & 0xFFE0)
            }

            Return (TCBV) /* \TCBV */
        }

        OperationRegion (TCBA, SystemIO, TCBS (), 0x10)
        Field (TCBA, ByteAcc, NoLock, Preserve)
        {
            Offset (0x04), 
                ,   9, 
            CPSC,   1
        }

        OperationRegion (PWMR, SystemMemory, PWRM, 0x0800)
        Field (PWMR, AnyAcc, NoLock, Preserve)
        {
            ACWA,   32, 
            DCWA,   32, 
            ACET,   32, 
            DCET,   32, 
            Offset (0xE0), 
            Offset (0xE2), 
            DWLE,   1, 
            HWLE,   1, 
            Offset (0xE8), 
                ,   31, 
            CECE,   1, 
            Offset (0x31C), 
                ,   13, 
            SLS0,   1, 
                ,   8, 
            XSQD,   1
        }

        OperationRegion (PMST, SystemMemory, PWRM, 0x80)
        Field (PMST, DWordAcc, NoLock, Preserve)
        {
            Offset (0x18), 
                ,   25, 
            USBP,   1, 
            Offset (0x1C), 
            Offset (0x1F), 
            PMFS,   1, 
            Offset (0x20), 
            MPMC,   32, 
                ,   20, 
            UWAB,   1
        }

        Method (PSOC, 1, Serialized)
        {
            If (PSON)
            {
                If (Arg0)
                {
                    CECE = One
                }
                Else
                {
                    CECE = Zero
                }
            }
        }

        Method (PSOS, 0, NotSerialized)
        {
            If (CECE)
            {
                Return (One)
            }
            Else
            {
                Return (Zero)
            }
        }
    }

    Scope (_SB.PCI0)
    {
        Method (_INI, 0, NotSerialized)  // _INI: Initialize
        {
            OSYS = 0x07DF
            If (CondRefOf (\_OSI, Local0))
            {
                If (_OSI ("Darwin"))
                {
                    OSYS = 0x2710
                }

                If (_OSI ("Linix"))
                {
                    OSYS = 0x03E8
                }

                If (_OSI ("Windows 2009"))
                {
                    OSYS = 0x07D9
                }

                If (_OSI ("Windows 2912"))
                {
                    OSYS = 0x07DC
                }

                If (_OSI ("Windows 2015"))
                {
                    OSYS = 0x07DF
                }
            }
            Else
            {
                OSYS = 0x07DF
            }
        }
    }

    Scope (\)
    {
        Name (PICM, Zero)
        Method (OSDW, 0, NotSerialized)
        {
            If ((OSYS == 0x2710))
            {
                Return (One)
            }
            Else
            {
                Return (Zero)
            }
        }

        Method (PINI, 0, NotSerialized)
        {
            OSYS = 0x07DF
            If (CondRefOf (_OSI, Local0))
            {
                If (_OSI ("Darwim"))
                {
                    OSYS = 0x2710
                }
                ElseIf (_OSI ("Linix"))
                {
                    OSYS = 0x03E8
                }
                ElseIf (_OSI ("Windows 2009"))
                {
                    OSYS = 0x07D9
                }
                ElseIf (_OSI ("Windows 2012"))
                {
                    OSYS = 0x07DC
                }
                ElseIf (_OSI ("Windows 2015"))
                {
                    OSYS = 0x07DF
                }
            }
            Else
            {
                OSYS = 0x07DF
            }
        }
    }

    Scope (_SB.PCI0)
    {
        Device (PPMC)
        {
            Name (_ADR, 0x001F0002)  // _ADR: Address
        }
    }

    Scope (_GPE)
    {
        Method (_L69, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
        {
            Notify (\_SB.PCI0.RP01, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP05, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP08, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP09, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP13, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP17, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP21, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP01.PXSX, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP05.GIGE, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP08.ARPT, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP09.PXSX, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP13.PXSX, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP17.SSD0, 0x02) // Device Wake
            Notify (\_SB.PCI0.RP21.PXSX, 0x02) // Device Wake
        }

        Method (_L6D, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
        {
            Notify (\_SB.PWRB, 0x02) // Device Wake
            Notify (\_SB.PCI0.XHC, 0x02) // Device Wake
            Notify (\_SB.PCI0.XDCI, 0x02) // Device Wake
            Notify (\_SB.PCI0.HDEF, 0x02) // Device Wake
            Notify (\_SB.PCI0.GLAN, 0x02) // Device Wake
            Notify (\_SB.PCI0.XSPI, 0x02) // Device Wake
        }

        Method (_L6F, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
        {
            Notify (\_SB.PCI0.XHC.RHUB.HS03, 0x02) // Device Wake
            Notify (\_SB.PCI0.XHC.RHUB.HS03.BLTH, 0x02) // Device Wake
        }

        Method (_L66, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
        {
        }

        Method (_L62, 0, NotSerialized)  // _Lxx: Level-Triggered GPE, xx=0x00-0xFF
        {
            GPEC = Zero
        }
    }

    Method (DTGP, 5, NotSerialized)
    {
        If ((Arg0 == ToUUID ("a0b5b7c6-1318-441c-b0c9-fe695eaf949b") /* Unknown UUID */))
        {
            If ((Arg1 == One))
            {
                If ((Arg2 == Zero))
                {
                    Arg4 = Buffer (One)
                        {
                             0x03                                             // .
                        }
                    Return (One)
                }

                If ((Arg0 == One))
                {
                    Return (One)
                }
            }
        }

        Arg4 = Buffer (One)
            {
                 0x00                                             // .
            }
        Return (Zero)
    }

    Method (_PTS, 1, NotSerialized)  // _PTS: Prepare To Sleep
    {
        If (Arg0)
        {
            \_SB.PCI0.LPCB.SPTS (Arg0)
        }
    }

    Method (_WAK, 1, Serialized)  // _WAK: Wake
    {
        \_SB.PCI0.LPCB.SWAK (Arg0)
        Return (Package (0x02)
        {
            Zero, 
            Zero
        })
    }

    Name (_S0, Package (0x04)  // _S0_: S0 System State
    {
        Zero, 
        Zero, 
        Zero, 
        Zero
    })
    Name (_S3, Package (0x04)  // _S3_: S3 System State
    {
        0x05, 
        Zero, 
        Zero, 
        Zero
    })
    Name (_S4, Package (0x04)  // _S4_: S4 System State
    {
        0x06, 
        Zero, 
        Zero, 
        Zero
    })
    Name (_S5, Package (0x04)  // _S5_: S5 System State
    {
        0x07, 
        Zero, 
        Zero, 
        Zero
    })
}

