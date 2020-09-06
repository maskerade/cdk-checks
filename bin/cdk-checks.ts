#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkChecksStack } from '../lib/cdk-checks-stack';

const app = new cdk.App();
new CdkChecksStack(app, 'CdkChecksStack');
