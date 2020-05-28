/* eslint-disable @typescript-eslint/camelcase */
export interface IrsdkConstants {
  varType: { [key: string]: VarType }
  irsdk_EngineWarnings: IrsdkEngineWarnings
  irsdk_Flags: { [key: string]: number }
  irsdk_TrkLoc: IrsdkTrkLOC
  irsdk_TrkSurf: { [key: string]: number }
  irsdk_SessionState: IrsdkSessionState
  irsdk_CameraState: { [key: string]: number }
  irsdk_PitSvFlags: IrsdkPitSvFlags
  irsdk_CarLeftRight: IrsdkCarLeftRight
  irsdk_PitSvStatus: IrsdkPitServiceStatus
}

export interface IrsdkPitServiceStatus {
  // status
  irsdk_PitSvNone: number
  irsdk_PitSvInProgress: number
  irsdk_PitSvComplete: number

  // errors
  irsdk_PitSvTooFarLeft: number
  irsdk_PitSvTooFarRight: number
  irsdk_PitSvTooFarForward: number
  irsdk_PitSvTooFarBack: number
  irsdk_PitSvBadAngle: number
  irsdk_PitSvCantFixThat: number
}

export interface IrsdkCarLeftRight {
  irsdk_LROff: number
  irsdk_LRClear: number        // no cars around us
  irsdk_LRCarLeft: number      // there is a car to our left
  irsdk_LRCarRight: number     // there is a car to our right
  irsdk_LRCarLeftRight: number // there are cars on each side
  irsdk_LR2CarsLeft: number    // there are two cars to our left
  irsdk_LR2CarsRight: number   // there are two cars to our right
}

export interface IrsdkEngineWarnings {
  irsdk_waterTempWarning: number
  irsdk_fuelPressureWarning: number
  irsdk_oilPressureWarning: number
  irsdk_engineStalled: number
  irsdk_pitSpeedLimiter: number
  irsdk_revLimiterActive: number
}

export interface IrsdkPitSvFlags {
  irsdk_LFTireChange: number
  irsdk_RFTireChange: number
  irsdk_LRTireChange: number
  irsdk_RRTireChange: number
  irsdk_FuelFill: number
  irsdk_WindshieldTearoff: number
  irsdk_FastRepair: number
}

export interface IrsdkSessionState {
  irsdk_StateInvalid: number
  irsdk_StateGetInCar: number
  irsdk_StateWarmup: number
  irsdk_StateParadeLaps: number
  irsdk_StateRacing: number
  irsdk_StateCheckered: number
  irsdk_StateCoolDown: number
}

export interface IrsdkTrkLOC {
  irsdk_NotInWorld: number
  irsdk_OffTrack: number
  irsdk_InPitStall: number
  irsdk_AproachingPits: number
  irsdk_OnTrack: number
}

export interface VarType {
  size: number
  iracingType: string
  jsBufferMethod: string
}

export const constants: IrsdkConstants = {
  varType: {
    0: {
      size: 1,
      iracingType: 'irsdk_char',
      jsBufferMethod: 'toString'
    },
    1: {
      size: 1,
      iracingType: 'irsdk_bool',
      jsBufferMethod: 'readInt8'
    },
    2: {
      size: 4,
      iracingType: 'irsdk_int',
      jsBufferMethod: 'readInt32LE'
    },
    3: {
      size: 4,
      iracingType: 'irsdk_bitField',
      jsBufferMethod: 'readUInt32LE'
    },
    4: {
      size: 4,
      iracingType: 'irsdk_float',
      jsBufferMethod: 'readFloatLE'
    },
    5: {
      size: 8,
      iracingType: 'irsdk_double',
      jsBufferMethod: 'readDoubleLE'
    }
  },

  // bit fields
  irsdk_EngineWarnings: {
    irsdk_waterTempWarning: 0x01,
    irsdk_fuelPressureWarning: 0x02,
    irsdk_oilPressureWarning: 0x04,
    irsdk_engineStalled: 0x08,
    irsdk_pitSpeedLimiter: 0x10,
    irsdk_revLimiterActive: 0x20
  },

  // global flags
  irsdk_Flags: {
    // global flags
    irsdk_checkered: 0x00000001,
    irsdk_white: 0x00000002,
    irsdk_green: 0x00000004,
    irsdk_yellow: 0x00000008,
    irsdk_red: 0x00000010,
    irsdk_blue: 0x00000020,
    irsdk_debris: 0x00000040,
    irsdk_crossed: 0x00000080,
    irsdk_yellowWaving: 0x00000100,
    irsdk_oneLapToGreen: 0x00000200,
    irsdk_greenHeld: 0x00000400,
    irsdk_tenToGo: 0x00000800,
    irsdk_fiveToGo: 0x00001000,
    irsdk_randomWaving: 0x00002000,
    irsdk_caution: 0x00004000,
    irsdk_cautionWaving: 0x00008000,

    // drivers black flags
    irsdk_black: 0x00010000,
    irsdk_disqualify: 0x00020000,
    irsdk_servicible: 0x00040000, // car is allowed service (not a flag)
    irsdk_furled: 0x00080000,
    irsdk_repair: 0x00100000,

    // start lights
    irsdk_startHidden: 0x10000000,
    irsdk_startReady: 0x20000000,
    irsdk_startSet: 0x40000000,
    irsdk_startGo: 0x80000000
  },

  // status
  irsdk_TrkLoc: {
    irsdk_NotInWorld: -1,
    irsdk_OffTrack: 0,
    irsdk_InPitStall: 1,
    irsdk_AproachingPits: 2,
    irsdk_OnTrack: 3
  },

  irsdk_TrkSurf: {
    irsdk_SurfaceNotInWorld: -1,
    irsdk_UndefinedMaterial: 0,

    irsdk_Asphalt1Material: 1,
    irsdk_Asphalt2Material: 2,
    irsdk_Asphalt3Material: 3,
    irsdk_Asphalt4Material: 4,
    irsdk_Concrete1Material: 5,
    irsdk_Concrete2Material: 6,
    irsdk_RacingDirt1Material: 7,
    irsdk_RacingDirt2Material: 8,
    irsdk_Paint1Material: 9,
    irsdk_Paint2Material: 10,
    irsdk_Rumble1Material: 11,
    irsdk_Rumble2Material: 12,
    irsdk_Rumble3Material: 13,
    irsdk_Rumble4Material: 14,

    irsdk_Grass1Material: 15,
    irsdk_Grass2Material: 16,
    irsdk_Grass3Material: 17,
    irsdk_Grass4Material: 18,
    irsdk_Dirt1Material: 19,
    irsdk_Dirt2Material: 20,
    irsdk_Dirt3Material: 21,
    irsdk_Dirt4Material: 22,
    irsdk_SandMaterial: 23,
    irsdk_Gravel1Material: 24,
    irsdk_Gravel2Material: 25,
    irsdk_GrasscreteMaterial: 26,
    irsdk_AstroturfMaterial: 27
  },

  irsdk_SessionState: {
    irsdk_StateInvalid: 0,
    irsdk_StateGetInCar: 1,
    irsdk_StateWarmup: 2,
    irsdk_StateParadeLaps: 3,
    irsdk_StateRacing: 4,
    irsdk_StateCheckered: 5,
    irsdk_StateCoolDown: 6
  },

  irsdk_CarLeftRight: {
    irsdk_LROff: 0,
    irsdk_LRClear: 1,        // no cars around us
    irsdk_LRCarLeft: 2,      // there is a car to our left
    irsdk_LRCarRight: 3,     // there is a car to our right
    irsdk_LRCarLeftRight: 4, // there are cars on each side
    irsdk_LR2CarsLeft: 5,    // there are two cars to our left
    irsdk_LR2CarsRight: 6    // there are two cars to our right
  },

  irsdk_CameraState: {
    irsdk_IsSessionScreen: 0x0001, // the camera tool can only be activated if viewing the session screen (out of car)
    irsdk_IsScenicActive: 0x0002,  // the scenic camera is active (no focus car)

    // these can be changed with a broadcast message
    irsdk_CamToolActive: 0x0004,
    irsdk_UIHidden: 0x0008,
    irsdk_UseAutoShotSelection: 0x0010,
    irsdk_UseTemporaryEdits: 0x0020,
    irsdk_UseKeyAcceleration: 0x0040,
    irsdk_UseKey10xAcceleration: 0x0080,
    irsdk_UseMouseAimMode: 0x0100
  },

  irsdk_PitSvFlags: {
    irsdk_LFTireChange: 0x0001,
    irsdk_RFTireChange: 0x0002,
    irsdk_LRTireChange: 0x0004,
    irsdk_RRTireChange: 0x0008,

    irsdk_FuelFill: 0x0010,
    irsdk_WindshieldTearoff: 0x0020,
    irsdk_FastRepair: 0x0040
  },

  irsdk_PitSvStatus: {
    // status
    irsdk_PitSvNone: 0,
    irsdk_PitSvInProgress: 1,
    irsdk_PitSvComplete: 2,

    // errors
    irsdk_PitSvTooFarLeft: 100,
    irsdk_PitSvTooFarRight: 101,
    irsdk_PitSvTooFarForward: 102,
    irsdk_PitSvTooFarBack: 103,
    irsdk_PitSvBadAngle: 104,
    irsdk_PitSvCantFixThat: 105
  }
}
