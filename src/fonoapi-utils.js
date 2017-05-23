// @flow

export const parseYesNo = (value: string): number =>
  value === 'No' ? 0 : 1;

export const parseWithUnit = (value: string): number =>
  Number.parseFloat(value.split(' ')[0]);

export const parseCores = (cpu: string): number => {
  const isQuad = cpu.toUpperCase().includes('QUAD');
  const isDual = !isQuad && cpu.toUpperCase().includes('DUAL');
  let cores = 1;
  if(isQuad) {
    cores = 4;
  }
  if(isDual) {
    cores = 2;
  }

  return cores;
}

export const parseSpeed = (cpu: string): number => {
  const parts = cpu.split(' ');
  const GHzIndex = parts.findIndex((str) => str.toUpperCase() === 'GHZ');
  if (GHzIndex === -1) {
    return NaN;
  }
  const speed = Number.parseFloat(parts[GHzIndex - 1]);
  return speed;
}

export const parseResolution = (resolution: string): number => {
  const parts = resolution.split(' ');
  if (parts.length <= 2) {
    return NaN;
  }
  const x = Number.parseInt(parts[0]);
  const y = Number.parseInt(parts[2]);

  return x * y;
}

const _includes = (str: string, criteria: string): number =>
  str.includes(criteria) ? 1 : 0;

export const parseIOS = (os: string): number =>
  _includes(os, 'iOS');

export const parseAndroid = (os: string): number =>
  _includes(os, 'Android');

export const parseWindowsPhone = (os: string): number =>
  _includes(os, 'Windows');
